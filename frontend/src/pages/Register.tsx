import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api-client'
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"


 export type registerform={
 email:string,
 firstname:string,
 lastname:string,
 password:string,
 confirmpassword:string,

}
type toast={
  message:string

}


const Register = () => {
  const queryClient=useQueryClient()
  const navigate=useNavigate()
  const {register,watch,handleSubmit,formState:{errors},}=useForm<registerform>()
  const mutation=useMutation(apiClient.register,{
    onSuccess:async() => {
      navigate('/')
      await queryClient.invalidateQueries('validateToken')
      toast.success("Succefully Done")
      
    
    },
    onError:()=>{
      throw  toast.error("not Succefull")
  
      
    }
  
  });

const onSubmit=handleSubmit((data) => {
    mutation.mutate(data);

});

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign Up</h2>
      <div className="flex flex-col md:flex-row gap-5 ">
        <label className="text-black-200 font-bold flex-1">
          Email
          <input className="border rounded w-full py-1 px-2 font-bold" {...register("email",{required:"email field is required"})}></input>
          {errors.email &&(
            <span className="text-red-500">{errors.email.message}</span>
          )}

        </label>
        <label className="text-black-200 font-bold flex-1 flex-row">
          Firstname
          <input className="border rounded w-full py-1 px-2 font-bold" {...register("firstname",{required:"firstname is required"})}></input>
          {errors.firstname && (
            <span className="text-red-500 font-bold">{errors.firstname.message}</span>
          )}

        </label>
      
      </div>
      <label className="text-black-200 font-bold flex-1">

Lastname
<input className="border rounded w-full py-1 px-2 font-bold" {...register("lastname",{required:"Lastname is Required"})}></input>
{errors.lastname && (
  <span className="text-red-500">{errors.lastname.message}</span>
)}

</label>
<label className="text-black-200 font-bold flex-1">

Password
<input type="password" className="border rounded w-full py-1 px-2 font-bold" {...register("password",{required:"Lastname is Required",minLength:{
  value:6,
  message:"password must be 6 character"
}})}></input>
{errors.password && (
  <span className="text-red-500">{errors.password.message}</span>
)}

</label>
<label className="text-black-200 font-bold flex-1">
re-pass
<input type="password" className="border rounded w-full py-1 px-2 font-bold" {...register("confirmpassword",{validate:(val)=>{
  if(!val){
    return "this field is required"

  }else if(watch("password") !== val){
    return "your password does not mathc"
  }

}})}></input>
{errors.confirmpassword && (
  <span className="text-red-500">{errors.confirmpassword.message}</span>
)}

</label>
<Link to='/sign-in'><span className="flex ">Already have Account Click Here ?</span></Link>
<span>
  <button type="submit" className="bg-orange-500 text-blue p-2 font-bold gap-5 hover:text-blue-50 border rounded">SUBMIT</button>
</span>


    </form>
    
    
  )
}

export default Register
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import * as apiClient from '../api-client'
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
export type Form={
  email:string,
  password:string
}
const Signin = () => {
  const navigate=useNavigate()
const {register,formState:{errors},handleSubmit}=useForm<Form>()
const mutation=useMutation(apiClient.signin,{
  onSuccess:async()=>{
    toast.success('Succefull done')
    navigate('/')
  },
  onError:()=>{
    toast.error("Not Succefull")
  }
})
const onSubmit=handleSubmit((data)=>{
  mutation.mutate(data)
})
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>

      <h2 className="text-2xl font-bold">
        SIGNIN
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="flex-1 font-bold">
          Email
          <input type="email" {...register('email',{required:"email is required"})} className="border rounded-md flex-1 py-1 gap-2 px-2 w-full"></input>
          {errors.email && (
            <span>{errors.email.message}</span>

          )}
        </label>
        <label className="flex-1 font-bold">
          password
          <input type="password" {...register('password',{
            required:"This field is Required",
            minLength:{
              value:6,
              message:"password must be 6 Characters"
            }
            
          })}
          className="border rounded-md flex-1 py-1 gap-2 w-full"
          
          ></input>
          {errors.password&&(
            <span>{errors.password.message}</span>

          )}
        </label>
       

        
      </div>
      <span>
      <button  className="bg-blue-600 text-black rounded-lg border " type="submit" >Log in</button>
      </span>
      
        
     
    </form>


  )
}

export default Signin



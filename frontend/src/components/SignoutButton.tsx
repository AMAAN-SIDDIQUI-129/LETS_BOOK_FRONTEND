import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api-client'
import { toast } from "sonner"

const SignoutButton = () => {
  const queryClient=useQueryClient()
  const mutation=useMutation(apiClient.Logout,{
    
    onSuccess:async ()=>{
      await queryClient.invalidateQueries('validateToken')                                           
      toast.success("Succefull Logout")
    },
    onError:()=>{
      toast.error("Not Logout")
    }
  })
  const handleClick=()=>{
    mutation.mutate()
  }
  return (

    <button   className="bg-white text-black font-bold text-mx-auto border hover:text-red-600 rounded-lg justify-center items-center " onClick={handleClick} > Logout</button>
  )
}

export default SignoutButton

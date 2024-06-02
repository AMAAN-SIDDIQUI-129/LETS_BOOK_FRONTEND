import { registerform } from "./pages/Register"
import { Form } from "./pages/Sign-in";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL || "";


export const register=async(formdata:registerform)=>{
  const response=await fetch(`${API_BASE_URL}/api/my/users/register`,{
    method:'POST',
    credentials:"include",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formdata)


  
  });
  const responseBody=await response.json()
  if(!response.ok){
    throw new Error(responseBody.message)
    
  }
}
export const verifyToken=async()=>{
  const response=await fetch( `${API_BASE_URL}/api/secure/validate-token`,{
    credentials:'include',
  })
  if(!response.ok){
    throw new Error("invalid Token")

  }
  return response.json()
}
export const signin=async(formdata:Form)=>{
  const response=await fetch(`${API_BASE_URL}/api/secure/login`,{
    method:'POST',
    credentials:'include',
    headers:{
      'Content-Type':'application/json',

    },
    body:JSON.stringify(formdata)
  })
  const body=await response.json()
  if(!response.ok){
    throw new Error(body.message)
  }
  return body

}
export const Logout=async()=>{
  const response=await fetch(`${API_BASE_URL}/api/secure/logout`,{
    credentials:'include',
    method:'POST',
    
    
  }
 
)
if(!response.ok){
  throw new Error('Error')
}

  

}
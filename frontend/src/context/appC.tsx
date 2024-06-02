import React, { useContext } from "react";
import { useQuery } from "react-query";
import * as apiClient from '../api-client'
type ToastMessage={
  message:string;
  type:"SUCCESS"|"ERROR";
}
type AppContext={
  showToast:(toastMessage:ToastMessage)=>void
  isLoggedIn:boolean

}
const AppContext=React.createContext< AppContext| undefined>(undefined);
export const AppContextProvider=({children}:{children:React.ReactNode})=>{
  const {isError} =useQuery('validateToken',apiClient.verifyToken,{
    retry:false
  })
  return(
    <AppContext.Provider value={{
      showToast:()=>undefined,
      isLoggedIn:!isError

    }}
    >
      {children}

    </AppContext.Provider>
    
  )

  
};
export const useAppContext=()=>{
  const context=useContext(AppContext);
  return context as  AppContext;
};
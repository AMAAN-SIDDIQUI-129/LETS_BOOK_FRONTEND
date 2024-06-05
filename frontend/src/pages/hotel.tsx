import { useMutation } from "react-query"
import MANGAEBUSCOMPANY from "../forms/BusTourCompanyForm/MANGAEBUSCOMPANY"
import * as apiClient from '../api-client'
import { toast } from "sonner"
const Hotel=()=>{
  const {mutate,isLoading}=useMutation(apiClient.ToursManage,{
    onSuccess:async()=>{
      toast.success("Congratulation Your Company is Live")
    },
    onError:()=>{
      toast.error("Sorry Cannot Live yout Tour Company")
    }
  })
  const handleSave=(TourData:FormData)=>{
    mutate(TourData)


  }
  return(
    <MANGAEBUSCOMPANY onSave={handleSave} isLoading={isLoading}/>
  )
}
export default Hotel
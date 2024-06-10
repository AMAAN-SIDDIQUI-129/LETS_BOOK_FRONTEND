import { useMutation,  useQuery } from "react-query";
import {  useParams } from "react-router-dom"
import * as apiClient from '../api-client'
import MANGAEBUSCOMPANY from "../forms/BusTourCompanyForm/MANGAEBUSCOMPANY";
import { toast } from "sonner";
const EditCompnay=()=>{
  const {TourId}=useParams();
  const {data:Tour}=useQuery('TourEdit',()=>apiClient.TourEdit(TourId||''),{
    enabled:!!TourId
  }
)
const {mutate,isLoading}=useMutation(apiClient.udateimage,{
  onSuccess:async()=>{
    toast.success('Compnay Updated')

  },
  onError:()=>{
    toast.error("Cannot Update Company")

  }
})
const handlesave=(TourData:FormData)=>{
  mutate(TourData)
}
  return <MANGAEBUSCOMPANY Tour={Tour} isLoading={isLoading} onSave={handlesave}/>
}

export default EditCompnay;

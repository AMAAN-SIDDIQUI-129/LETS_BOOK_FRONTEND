import { useParams } from 'react-router-dom'
import * as apiClient from '../api-client'
import { useQuery } from 'react-query';
import MANGAEBUSCOMPANY from '../forms/BusTourCompanyForm/MANGAEBUSCOMPANY';
const EditCompany=()=>{
  const {TourId}=useParams();
  const {data:Tour}=useQuery("TourEdit",(Tour)=>{
    apiClient.TourEdit(TourId || ''),{
      enabled:!!TourId
    }

  })
  return <MANGAEBUSCOMPANY Tour={Tour}/>



}
export default EditCompany
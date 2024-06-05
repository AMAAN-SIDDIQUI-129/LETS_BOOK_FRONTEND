import { FormProvider, useForm } from "react-hook-form"
import DetailsSection from "./DetailsSection"
import TypeBus from "./type";
import Guest from "./Guest";
import Image from './imagesection'

export type Bustype={
name:string,
city:string;
country:string;
description:string;
type:string;
rating:number;
imageFile:FileList;
childCount:number;
adultCount:number;
priceperTrip:number;






}
type Props={
  onSave:(TourData:FormData)=>void
  isLoading:boolean
}
const MANGAEBUSCOMPANY = ({onSave,isLoading}:Props) => {
  const forms =useForm<Bustype>();
  const {handleSubmit}=forms;
  
  const onSubmit=handleSubmit((formdata:Bustype)=>{
    const formData=new FormData();
    formData.append('name',formdata.name);
    formData.append('city',formdata.city);
    formData.append('country',formdata.country);
    formData.append('description',formdata.description);
    formData.append('type',formdata.type);
    formData.append('rating',formdata.rating.toString());
    formData.append('adultCount',formdata.adultCount.toString());
    formData.append('childCount',formdata.childCount.toString());
    formData.append('priceperTrip',formdata.priceperTrip.toString());

    Array.from(formdata.imageFile).forEach((imageFiles)=>{
      formData.append(`imageFile`,imageFiles)
    })
onSave(formData)
  
    


  })



  return (
    <FormProvider {...forms}>
      <form onSubmit={onSubmit}>
        <DetailsSection/>
        <TypeBus/>
        <Guest/>
        <Image/>
        <span>
          <button className="flex flex-col bg-blue-500 text-white font-bold py-1 px-2 border rounded-lg" type="submit" disabled={isLoading} >
            Submit

          </button>
        </span>
      </form>
    </FormProvider>

  )
}

export default MANGAEBUSCOMPANY
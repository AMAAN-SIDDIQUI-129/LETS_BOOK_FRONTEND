import { FormProvider, useForm } from "react-hook-form"
import DetailsSection from "./DetailsSection"
import TypeBus from "./type";
import Guest from "./Guest";
import Image from './imagesection'
import { useEffect } from "react";

import { BookType } from "../../../../backend/src/shared/type";
export type Bustype={
name:string,
city:string;
country:string;
description:string;
type:string;
rating:number;
imageFile:FileList;
imageUrl:string[];
childCount:number;
adultCount:number;
priceperTrip:number;






}
type Props={
 Tour?:BookType
  
  onSave:(TourData:FormData)=>void
  isLoading:boolean
}
const MANGAEBUSCOMPANY = ({onSave,isLoading,Tour}:Props) => {
  const forms =useForm<Bustype>();
  const {handleSubmit,reset}=forms;
 useEffect(()=>{
   reset(Tour);
 },[Tour ,reset])
  const onSubmit=handleSubmit((formdata:Bustype)=>{
    const formData=new FormData();
    if(Tour){
      formData.append('TourId',Tour._id)
    }
    formData.append('name',formdata.name);
    formData.append('city',formdata.city);
    formData.append('country',formdata.country);
    formData.append('description',formdata.description);
    formData.append('type',formdata.type)
    formData.append('rating',formdata.rating.toString());
    formData.append('adultCount',formdata.adultCount.toString());
    formData.append('childCount',formdata.childCount.toString());
    formData.append('priceperTrip',formdata.priceperTrip.toString());
    if(formdata.imageUrl){
      formdata.imageUrl.forEach((url,index)=>{
        formData.append(`imageUrl[${index}]`,url)
      })
    }
    
    

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

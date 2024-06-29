import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import * as apiClient from '../api-client'
import { AiFillStar } from "react-icons/ai"
import Guestinfo from "../components/Guestinfo"

const Detail=()=>{
  const {TourId}=useParams()
  const {data:Tour}=useQuery("findCompny",()=>
    apiClient.TourbyId(TourId || ''),{
      enabled:!!TourId,

    }
  )
  if(!Tour){
    return <></>
  }
  return(
    <div className="space-y-6">
      <div>
      
        <span className="flex">{Array.from({length:Tour.rating}).map(()=>(
        <span >
        <AiFillStar />
        </span>
        ))}</span>
        <div className="gap-2  flex justify-between mt-2 font-bold ">
          <span className="text-3xl font bold">{Tour.name}</span>
         <div>
         
       </div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          { Tour.imageUrl.map((image)=>(
            <div className="h-[250px]">
              <img src={image} alt={Tour.name} className="rounded-md w-full h-full object-cover object-center"/>
              </div>
            
               ))}
   
             </div>
         
           

         
        </div>
        <div className="border border-gray-500 rounded-lg ">
          <span className="font-bold text-black-500">Details:</span>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-[2fr_1fr] gap-2">
          
          <div className="whitespace-pre-line">{Tour.description}</div>
          <div>
            <Guestinfo priceperTrip={Tour.priceperTrip} TourId={Tour._id}/>
          </div>
      

        </div>
       
        
        

      </div>

    
    
    
  )
}
export default Detail
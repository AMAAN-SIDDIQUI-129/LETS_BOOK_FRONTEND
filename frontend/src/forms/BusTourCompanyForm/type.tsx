import { useFormContext } from "react-hook-form";
import { ServicesType } from "../../config/type";
import { Bustype } from "./MANGAEBUSCOMPANY";


const TypeBus = () => {
  const {register,formState:{errors},watch}=useFormContext<Bustype>()
const watchType=watch("type")
  return (
    <div className="flex flex-col gap-4">
     <h2 className="text-2xl font-bold mb-3 text-blue-500 hover:text-orange-600">Services Type & Bus Type</h2>
     <div className="grid grid-cols-5 gap-3">
     
      {ServicesType.map((type)=>(
         <label className={
          watchType === type ? "cursor-pointer bg-blue-500 font-bold text-black text-sm rounded-lg px-4 py-2 ":" bg-gray-500  cursor-pointer rounded-lg px-4 py-2 text-black text-sm font-bold "
         }>
      <input type="radio" value={type} {...register('type',{required:"Type of Bus is required"})} 
      />
      <span>{type}</span>
      </label>

    


     ))}
    
     {errors.type && (
      <span className="text-red-500 ">{errors.type.message}</span>
     )}
      </div> 
    </div>
    
  )
}

export default TypeBus
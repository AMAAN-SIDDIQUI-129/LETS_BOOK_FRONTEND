import { useFormContext } from "react-hook-form"
import { Bustype } from "./MANGAEBUSCOMPANY"

const Image=()=>{
  const {register,formState:{errors}}=useFormContext<Bustype>()
  return(
    <div className="flex flex-col gap-4"
   > <h2 className="text-blue-500 font-bold text-2xl">Image</h2> 
   <div className="flex container bg-gray-500 rounded w-full border py-1 px-2">
   <label className="text-1xl font-bold text-black ">
    <input type="file" accept=".jpeg .png .jpg" {...register('imageFile',{
      validate:(imageFile)=>{
        const totalLenght=imageFile.length;
        if(totalLenght===0){
          return "there must be on image"
        }
        if(totalLenght>6){
          return "number of images cannot be more than 6"
        }
      },
      
      required:"Image is must required"})}></input>
    {errors.imageFile && (
      <span className="text-red-500"> {errors.imageFile.message}</span>
    )}
   </label>
   </div>
    </div>
  )
}
export default Image
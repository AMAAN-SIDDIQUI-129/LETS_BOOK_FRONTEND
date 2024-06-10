import { useFormContext } from "react-hook-form"
import { Bustype } from "./MANGAEBUSCOMPANY"

const Image=()=>{
  const {register,formState:{errors},watch,setValue}=useFormContext<Bustype>();
  const image=watch('imageUrl')
  const deletes=(event:React.MouseEvent<HTMLButtonElement,MouseEvent>,imageUrl:string)=>
    {
    event.preventDefault();


    setValue('imageUrl',image.filter((url)=>url !==imageUrl))
  }

  return(
    <div 
   > <h2 className="text-blue-500 font-bold text-2xl">Image</h2> 
   <div className=" bg-gray-500 rounded w-full border py-1 px-2">
    {image && (
      <div className="grid grid-cols-6 gap-4">
        {image.map((url)=>(
          <div className="relative group">
            <img src={url} className="min-h-full object-cover"/>
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0  group-hover:opacity-100 text-white" onClick={(event)=>deletes(event, url)}>Remove</button>
          </div>

        ))}
      </div>
    )}

 
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
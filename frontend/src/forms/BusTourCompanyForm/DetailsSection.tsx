import { useFormContext } from "react-hook-form"
import { Bustype } from "./MANGAEBUSCOMPANY"
export type emoji={

}
const DetailsSection = () => {
  const {register,formState:{errors},} =useFormContext<Bustype>();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-blue-500 hover:text-orange-500 mb-3">Tour Company Managment</h1>
      
      <label className="text-blue-500 hover:text-black font-bold flex-1">
        Tour Name
        <input type="text" {...register('name',{required:"name field is required"})} className="border rounded-lg hover:border-orange-500  py-1 px-2 w-full border-black" ></input>
        {errors.name && (
          <span className="text-red-600  ">{errors.name.message}</span>
        )}
      </label>
      <div className="flex gap-4">
      <label className="text-blue-500 font-bold hover:text-orange-500 flex-1">
        City
        <input type="text" className="border rounded-lg justify-between border-black py-1 px-2 w-full hover:border-orange-500" {...register('city',{required:"city field is required"})} ></input>
        {errors.city && (
          <span className="text-red-600">{errors.city.message}</span>
        )}
      </label>
      <label className="font-bold text-blue-500 hover:text-orange-500 flex-1">
        Country
        <input type="text" {...register('country',{required:"city field is required"})} className="border rounded-lg border-black py-1 px-2  w-full hover:border-orange-500"></input>
      </label>
      </div>
      <label className="flex-1 font-bold text-blue-500 hover:text-orange-500  border-black">
        Description
        <textarea rows={8} className="w-full py-1 px-2 border-black border-b-gray-100 hover:border-orange-600"{...register('description',{
          required:"description field is required"
        })}></textarea>
        {errors.description && (
          <span className="text-red-600"> {errors.description.message}</span>

)}
      </label>
      <div className="flex gap-4">
      <label className="flex-1 text-blue-500 font-bold  ">
        Tour Price
        <input type="number" min={1} className="border border-black rounded-lg w-full py-1 px-2   hover:border-orange-600"{...register('priceperTrip',{required:"priceperTrip field is required"})}>

        </input>
        {errors.priceperTrip &&(
          <span className="text-red-600"> {errors.priceperTrip.message}</span>
        )}
      </label>
      <label className="flex-1 font-bold text-blue-500 ">
         Service Rating 
        <select className="font-bold w-full rounded-lg border py-1 px-2 border-black"{...register('rating',{required:"this field is required"})}>
          <option value=''>Service Rating</option>
          {[1,2,3,4,5].map((num)=>(
            <option value={num}>{num}</option>

          ))}

        </select>
        {errors.rating && (
          <span className="text-red-500">{errors.rating.message}</span>
        )}
      </label>
      </div>
      <label>
        Type
      </label>


    </div>

  )
}

export default DetailsSection
import { useFormContext } from "react-hook-form"
import { Bustype } from "./MANGAEBUSCOMPANY"

const Guest = () => {
const {register,formState:{errors}}=useFormContext<Bustype>()
  return (

    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-blue-500 text-1xl  flex-1">
        NO OF PASSENGERS
      </h2>
      <div className="flex gap-4  py-2 px-2 border rounded-lg  bg-gray-500">
        <label className="font-bold text-black   flex-1">
          Adults
          <input type="number" className="border rounded-lg  border-black py-1 px-2 w-full hover:border-orange-500 " {...register('adultCount',{required:"this filed is required"})}></input>
          {errors.adultCount && (
            <span className="text-red-500 "> {errors.adultCount.message}</span>
          )}
        </label>
        <label className="font-bold text-black   flex-1">
          Child
          <input  type="number" className="border rounded-lg  border-black py-1 px-2 w-full hover:border-orange-500" {...register('childCount',{required:"this field is required"})}></input>
          {errors.childCount && (
            <span className="text-red-500">{errors.childCount.message}</span>
          )}


        </label>

      </div>


    </div>
  )
}

export default Guest
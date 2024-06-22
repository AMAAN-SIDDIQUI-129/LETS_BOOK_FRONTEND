import { FormEvent, useState } from "react"
import { useSearchContext } from "../context/SearchContext"
import { MdTravelExplore } from "react-icons/md"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import {  useNavigate } from "react-router-dom";

const Searchbar=()=>{
  const navigate=useNavigate()
  const search=useSearchContext()
  const [destination,setDestination]=useState<string>(search.destination)
  const [checkIn,setCheckIn]=useState<Date>(search.checkIn)
  const [checkOut,setCheckOut]=useState<Date>(search.checkOut)
  const [adultCount,setadultCount]=useState<number>(search.adultCount)
  const [childCount,setChildCount]=useState<number>(search.childCount)
  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault()

    search.searchvalues(destination,
      checkIn
      ,checkOut,
      adultCount,
      childCount
    );
      
      navigate('/search')
      

  }
  const minDate=new Date()
  const maxDate=new Date()
  maxDate.setFullYear(maxDate.getFullYear()+1)
  return(
    <form onSubmit={handleSubmit} className="-mt-5 p-1 bg-orange-400 rounded-lg  shadow-md grid grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5  items-center gap-4 ">
      <div className="flex flex-row items-center flex-1 bg-white p-2 rounded-lg   hover:flex-3">
        <MdTravelExplore size={25} className="mr-2"/>
        <input className="text-md w-full rounded-lg focus:outline-none " value={destination} onChange={(event)=>setDestination(event.target.value)}/>




      </div>
      <div className="bg-white px-2 py-1 gap-2 flex rounded-lg border
      ">
        <label className="items-center flex">

          Seniour: 
          <input type="number" min={1 } max={30} className="focus:outline-none w-full font-bold p-1 flex-1 rounded" value={adultCount} onChange={(event)=>setadultCount(parseInt(event.target.value))}/>
        </label>
        <label className="items-center flex">

Kids:
<input type="number" min={1 } max={10} className="focus:outline-none w-full font-bold" value={childCount} onChange={(event)=>setChildCount(parseInt(event.target.value))}/>
</label>

        

      </div>
      <div className="border rounded-lg">
        <DatePicker selected={checkIn} onChange={(date)=>setCheckIn(date as Date)} selectsStart startDate={checkIn} endDate={checkOut} minDate={minDate} maxDate={maxDate } className="min-w-full bg-white p-2 focus:outline-none rounded-lg" wrapperClassName="min-w-full"/>
         
      </div>
      <div className="border rounded-lg ">
        <DatePicker selected={checkOut} onChange={(date)=>setCheckOut(date as Date)} selectsStart startDate={checkOut} endDate={checkOut} minDate={minDate} maxDate={maxDate } className="min-w-full bg-white p-2 focus:outline-none rounded-lg" wrapperClassName="min-w-full"/>
          </div>
          <div className="flex gap-1">
            <button type="submit" className="w-2/3 border rounded-sm bg-blue-600 text-white h-full p-2 text-xl hover:bg-red-500">
            Find

              </button>
              <button className="border w-2/3 bg-red-600 rounded-sm text-white h-full p-2 text-xl hover:bg-blue-500">
            Clear

              </button>


          </div>
      
       
      


    </form>
  )

}
export default Searchbar
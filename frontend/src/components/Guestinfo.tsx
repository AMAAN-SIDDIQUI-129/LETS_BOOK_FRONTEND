import { useForm } from "react-hook-form"
import DatePicker from 'react-datepicker'
import { useSearchContext } from "../context/SearchContext"
import { useAppContext } from "../context/appC"
import { Link, useLocation, useNavigate } from "react-router-dom"
type Props={
  TourId:string,
  priceperTrip:number


}
type Guestinfoformdata={
  checkIn:Date;
  checkOut:Date;
  childCount:number,
  adultCount:number

}

const Guestinfo=({TourId,priceperTrip}:Props)=>{

  const {isLoggedIn}=useAppContext()
  const search=useSearchContext()
  const {watch,setValue,handleSubmit,register,formState:{errors}}=useForm<Guestinfoformdata>({
    defaultValues:{
      checkIn:search.checkIn,
      checkOut:search.checkOut,
      adultCount:search.adultCount,
      childCount:search.childCount,



    }
  })
  const checkIn=watch('checkIn')
  const checkOut=watch('checkOut')
 const navigate=useNavigate()
 const location=useLocation()
  const minDate=new Date()
  const maxDate=new Date()
  maxDate.setFullYear(maxDate.getFullYear()+1)
  const onSignClick=(data:Guestinfoformdata)=>{
    search.searchvalues("",data.checkIn,data.checkOut,data.adultCount,data.childCount)
    navigate('/sign-in',{state:{from:location}})
  }
  const onSubmit=(data:Guestinfoformdata)=>{
    search.searchvalues("",data.checkIn,data.checkOut,data.adultCount,data.childCount)
    navigate(`/Tour/${TourId}/booking`)
  }

  
  return(
    
    <div className="flex flex-col p-2  bg-blue-400 gap-2 md:p-1">
      <h3 className="text-md font-bold">Price:{priceperTrip}</h3>
      <form onSubmit={isLoggedIn ? handleSubmit(onSubmit):handleSubmit(onSignClick)}>
      <div className="grid grid-cols-2 gap-2">
      <DatePicker selected={checkIn} onChange={(date)=>setValue("checkIn",date as Date)} selectsStart startDate={checkIn} endDate={checkOut} minDate={minDate} maxDate={maxDate } placeholderText="Checkin"className="min-w-full bg-white p-2 focus:outline-none rounded-lg" wrapperClassName="min-w-full"/>
      <DatePicker selected={checkOut} onChange={(date)=>setValue("checkOut",date as Date)} selectsStart startDate={checkIn} endDate={checkOut} minDate={minDate} maxDate={maxDate } placeholderText="checkOur"className="min-w-full bg-white p-2 focus:outline-none rounded-lg" wrapperClassName="min-w-full"/>


      </div>
      <div className="  px-2 py-1 gap-2">
        <label className="items-center  gap-2">
          adultCount
          <input className="w-full p-1  rounded-lg focus:outline-none font-bold" type="number" min={1} max={30} {...register('adultCount',{
            required:"adultcount is required to go next step",
            min:{
              value:1,
              message:"Field is required"
            },
            valueAsNumber:true


          })}/>
          {errors.adultCount && (
            <span className="text-red-500 font-bold">{errors.adultCount.message}</span>
          )}
          </label>
          
          <label className="items-center gap-2">
            childCount
          <input className="w-full p-1 rounded-lg focus:outline-none font-bold" type="number" {...register('childCount',{
            required:"This field is required",
            min:{
              value:1,
              message:"This field is required"
            },
            valueAsNumber:true,


          })}/>

          </label>
          {errors.adultCount && (
            <span className="text-red-500">{errors.adultCount.message}</span>
          )}
          </div>
          
          {isLoggedIn ? (
            <button className="bg-blue-500 text-white hover:text-black ">BookNow</button>

            
          ):(
            <Link to='/sign-in' >
            <button className=" text-white  hover:text-black bg-red-500 rounded-lg  ">Signin now</button>
            </Link>
          )}
</form>
      </div>



  )


}
export default Guestinfo

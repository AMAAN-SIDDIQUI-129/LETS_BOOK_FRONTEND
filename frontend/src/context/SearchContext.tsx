import { Search } from "lucide-react";
import React, { useContext, useState } from "react";
export type Search={
  destination:string;
  checkIn:Date;
  checkOut:Date;
  adultCount:number;
  childCount:number;
  TourId:string;
  searchvalues:(
    destination:string,
    checkIn:Date,
    checkOut:Date,
    adultCount:number,
    childCount:number,

  )=>void
}
type Props={
  children:React.ReactNode
}

const Search=React.createContext<Search | undefined>(undefined);
export  const SearchContextProvider=({children}:Props)=>{
  const [destination,setDestination]=useState<string>(()=>sessionStorage.getItem('destination') || (''))
  const [checkIn,setCheckIn]=useState<Date>(()=> new Date(sessionStorage.getItem('chekIn') || new Date().toISOString()))
  const [checkOut,setCheckOut]=useState<Date>(()=>new Date(sessionStorage.getItem("chekOut") || new Date().toISOString()))
  const [childCount,setChildCount]=useState<number>(()=> parseInt(sessionStorage.getItem('childCount')|| '1'))
  const [adultCount,setadultCount]=useState<number>(()=>parseInt(sessionStorage.getItem('adultCount')|| '1'))
  const [TourId,setTourId]=useState<string>(()=>sessionStorage.getItem('TourId')|| (''))

  const searchvalues=(
    destination:string,
    checkIn:Date,
    checkOut:Date,
    adultCount:number,
    childCount:number,
    TourId?:string
  )=>{
    setDestination(destination)
    setCheckIn(checkIn)
    setCheckOut(checkOut)
    setChildCount(childCount)
    setadultCount(adultCount)
    if(TourId){
      setTourId(TourId)
    }
    sessionStorage.setItem('destination',destination)
    sessionStorage.setItem('checkIn',checkIn.toISOString())
    sessionStorage.setItem("checkOut",checkOut.toISOString())
    sessionStorage.setItem('adultCount',adultCount.toString())
    sessionStorage.setItem('childCount',childCount.toString())
    if(TourId){
      sessionStorage.setItem(" TourId",TourId.toString())
    }





  }
  return(
    <Search.Provider value={{destination,checkIn,checkOut,adultCount,childCount,TourId,searchvalues}}>
      {children}
    </Search.Provider>
  )

}

export const useSearchContext=()=>{
  const context=useContext(Search)
  return context as Search
}
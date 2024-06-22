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
  const [destination,setDestination]=useState<string>("")
  const [checkIn,setCheckIn]=useState<Date>(new Date())
  const [checkOut,setCheckOut]=useState<Date>(new Date())
  const [childCount,setChildCount]=useState<number>(1)
  const [adultCount,setadultCount]=useState<number>(1)
  const [TourId,setTourId]=useState<string>('')

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
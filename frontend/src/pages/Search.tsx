import { useQuery } from "react-query"
import { useSearchContext } from "../context/SearchContext"
import * as apiClient from '../api-client'
import React, { useState } from "react"
import StarFilter from "../components/filter"
import Tour from "../components/Tourtype"
import SearchCard from "../components/SearchCard"
import Pagination from "../components/pagination"
const Search=()=>{
  const search=useSearchContext()
  const [page,setPage]=useState<number>(1)
  const [rating,setrating]=useState<string[]>([])
  const [types,selectedTypes]=useState<string[]>([])
  const searchparams={
    destination:search.destination,
    checkIn:search.checkIn.toISOString(),
    checkOut:search.checkOut.toISOString(),
    childCount:search.childCount.toString(),
    adultCount:search.adultCount.toString(),
    page:page.toString(),
    star:rating,
    types:selectedTypes

    



  }
 const {data:TourData}=useQuery(['searchcompany',searchparams],()=>

  apiClient.searchcompany(searchparams)
 )
 const handleSave=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const rating=event.target.value
  setrating((prevstar)=>
    event.target.checked
  ?[...prevstar,rating]
  :prevstar.filter((rating)=>rating !==rating)
  )

 }
const handelSaveType=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const Tour=event.target.value
  selectedTypes((type)=>
    event.target.checked
  ?[...type,Tour]
  :type.filter((Tour)=>Tour !==Tour)

  )
}


 

  return  (
   <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
    <div className="rounded-lg border border-slate-500 p-5 sticky h-fit top-10">
      <div className="space-y-5">
        <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">Filter</h3>
        <StarFilter rating={rating} onChange={handleSave}/>

        <Tour types={types} onChange={handelSaveType}/>

      </div>
      

    </div>
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="font-bold gap-2 text-xl">
          {TourData?.pagination.total} results found
          {search.destination ? ` in ${search.destination}`:""}
        </span>
        
      </div>
    {TourData?.data.map((Tour)=>(
      <SearchCard Tour={Tour}/>
    ))}
    <div>
      <Pagination page={TourData?.pagination.page || 1} pages={TourData?.pagination.pages|| 1} onPageChange={(page)=>setPage(page)}/>
    </div>
    </div>
   </div>
  )
  
   
 
}
export default Search
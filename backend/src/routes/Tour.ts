import express from "express";
import { Request,Response } from "express";
import Book from "../models/Hotel";
import { Tour } from "../shared/type";
import verfiyToken from "../middleware/auth";
const router=express.Router()
router.get('/search',async(req:Request,res:Response)=>{
  try{

    const query=constructQuery(req.query)
    let sortOption={}
    switch(req.query.sortOption){
      case "rating":
        sortOption={rating:-1}
        break;
        case "priceperTrip":
          sortOption={priceperTrip:1}
          break
          case "priceperTripes":
          sortOption={priceperTrip:-1}
          break

        
    }
  const pageSize=5;
  const pageNumber=parseInt(req.query.page ? req.query.page.toString() : '1')
  const skip=(pageNumber-1)*pageSize;
  const total=await Book.countDocuments(query);
  const tour=await Book.find().skip(skip).sort(sortOption).limit(pageSize)

  const response:Tour={
    data:tour,
    pagination:{
      total,
      page:pageNumber,
      pages:Math.ceil(total/pageSize)
    }
  }
  res.json(response)
  }
  catch(error){
    console.log(error)
    res.status(501).json({message:"Something badly wrong"})
  }
})
export default router
const constructQuery=(queryParams:any)=>{
  let constructQuery:any={};
  if(queryParams.destination){
    constructQuery.$or=[
      {city:new RegExp(queryParams.destination,"i")},
      {country:new RegExp(queryParams.destination,"i")}
    ]
    
  }
  if(queryParams.adultCount){
    constructQuery.adultCount={
      $gte:parseInt(queryParams.adultCount),

    };
  }
  if(queryParams.childCount){
    constructQuery.childCount={
      $gte:parseInt(queryParams.childCount),

  }
  }
  if(queryParams.type){
    constructQuery.type={
      $in:Array.isArray(queryParams.type)?queryParams.type : [queryParams.type]
    }
    
  }
  if(queryParams.rating){
    const rating=Array.isArray(queryParams.rating)?queryParams.rating.map((star:string)=>parseInt(star))
    :parseInt(queryParams.rating);
    constructQuery.rating={$req:rating}
  }
  if(queryParams.maxPrice){
    constructQuery.priceperTrip={
      $lte:parseInt(queryParams.maxPrice).toString()

    }
  }
  return constructQuery;
}

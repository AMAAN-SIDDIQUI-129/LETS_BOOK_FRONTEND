import mongoose from "mongoose";
export type BookType={
  _id:string
  userId:string,
name:string,
city:string,
country:string,
description:string,
type:string,
adultCount:string,
childCount:string,
facility:string[],
imageUrl:string[],
lastUpdated:Date,
priceperTrip:number,
rating:number,




}
const BookSchema=new mongoose.Schema<BookType>({
  userId:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true,


  },
  city:{
    type:String,
    required:true,


  },
  country:{
    type:String,
    required:true,


  },
  description:{
    type:String,
    required:true,


  },

  type:{
    type:String,
    required:true,


  },
  childCount:{
    type:String,
    required:true
  },
  adultCount:{
    type:String,
    required:true,


  },
  imageUrl:[{
    type:String,
    required:true,


  }],
  priceperTrip:{
    type:Number,
    required:true,


  },
  rating:{
    type:Number,
    required:true,
    min:1,
    max:5



  },
  lastUpdated:{
    type:Date,
    required:true,


  },





  
})
const Book= mongoose.model<BookType>("Bus",BookSchema)
export default Book
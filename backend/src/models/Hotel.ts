import mongoose from "mongoose";
import { BookType } from "../shared/type";

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
    type:Number,
    required:true
  },
  adultCount:{
    type:Number,
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
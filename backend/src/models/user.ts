import { Schema, StringExpressionOperatorReturningBoolean } from "mongoose";
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { UserType } from "../shared/type";

const userschema= new mongoose.Schema({
  email:{
    type:String,
    required:true,unique:true,
    

  },
  password:{
    type:String,
    required:true,
    
  },
  firstname:{
    type:String,
    required:true,
   

  },
  lastname:{
    type:String,
    required:true,
    
  },


});
userschema.pre('save',async function(next){
  if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,8)
  }
  next()
})
const User= mongoose.model<UserType>("User",userschema)
export default User
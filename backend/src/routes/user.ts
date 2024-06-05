import express from 'express'
import jwt from "jsonwebtoken"
const router=express.Router()
import User from "../models/user"
import {check, validationResult} from 'express-validator'
import {Request,Response} from 'express'
import verifyToken from '../middleware/auth'
router.post('/register',[
  check("firstname","firstname is required").isString(),
  check("lastname","lastname is required").isString(),
  check("email","email is required").isEmail(),
  check("password","password is required").isLength({min:6})
],async(req:Request,res:Response)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).json({message: errors.array()})
  }
  try{
  let user=await User.findOne({email:req.body.email})

  if(user){
    res.status(401).json({message:"the Following user already exist"})

  }
  user=new User(req.body)
  await user.save()
  const token=jwt.sign( {userId: user.id},process.env.JWT_SECRET_KEY as string,{
    expiresIn:"1d"



  })
  res.cookie("auth_token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    maxAge:86400000,


  })
  return res.status(200)


  
  }
  catch(error){
    console.log(error)
    res.sendStatus(500).json({message:"Very Bad Request"})

  }
  


})

export default router
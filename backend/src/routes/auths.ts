import bcrypt from 'bcryptjs'
import User from '../models/user'
import express from 'express'
import {Request,Response} from "express"
import jwt from 'jsonwebtoken'
import verifyToken from '../middleware/auth'
const router=express.Router()
import {check, validationResult} from 'express-validator'
router.post('/login',[
  check('email',"email is required").isEmail(),
  check('password',"password is required").isLength({min:6})
],async(req:Request,res:Response)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty){
    res.status(500).json({message: errors.array()})

  }
  const {email,password}=req.body ;
  try{
    const user =await User.findOne({email})
    if(!user){
      res.status(400).json({message:"user not Availaible"})
    }
    const compa=await bcrypt.compare(password,user!.password)
    if(!compa){
     return res.status(400).json({userId:user!.id})

    }
    const token= jwt.sign( {userId:user!.id},process.env.JWT_SECRET_KEY as string,{
      expiresIn:'1d',

    })
    res.cookie('auth_token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV === 'production',
      maxAge:86400000,


  })
   res.status(200).json({userId:user!.id})



  }catch(error){
    console.log(error)
    return res.status(500).json({error:error})
    
  }
} )
router.get('/validate-token',verifyToken,(req:Request,res:Response)=>{
  res.status(200).send({userId:req.userId})
 })

router.post('/logout',(req:Request,res:Response)=>{
  res.cookie('auth_token',"",{
    expires:new Date(0),

  })
  res.send()
})
console.log("Amaan")

  
export default router
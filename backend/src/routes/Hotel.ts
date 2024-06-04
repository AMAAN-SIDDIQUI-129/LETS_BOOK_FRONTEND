import cloudinary from 'cloudinary'
import express from "express"
import {Request,Response} from 'express'
import multer from 'multer'
import Book, { BookType } from '../models/Hotel'
import {body} from 'express-validator'
import verfiyToken from '../middleware/auth'
const router=express.Router()
const storage=multer.memoryStorage()
const upload=multer({
  storage:storage,
  limits:{
    fileSize:5 *1024 * 1024


  }

})
router.post('/',verfiyToken,[
  body("name").notEmpty().withMessage("name is must required"),
  body("city").notEmpty().withMessage("city is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("description").notEmpty().withMessage("description field is required"),
  body("type").notEmpty().withMessage("type field is required"),
  body('priceperTrip').notEmpty().isNumeric().withMessage("Price per trip is required"),
  body("rating").notEmpty().withMessage("rating field is required"),
  body("facility").notEmpty().isArray().withMessage("facility field is required")


],upload.array("imageFile",6),async(req:Request,res:Response)=>{
  const imageFile=req.files as Express.Multer.File[]
  const BusBook:BookType=req.body
  try{

  
  const uploadPromise=await imageFile.map(async(image)=>{
    const b64image=Buffer.from(image.buffer).toString('base64')
    const dataUri="data:"+image.mimetype + ";base64,"+b64image
    const uploadResponse=await cloudinary.v2.uploader.upload(dataUri)
    return uploadResponse.url

  })
  const imageUrl=await Promise.all(uploadPromise)
  BusBook.imageUrl=imageUrl;
  BusBook.lastUpdated=new Date();
  BusBook.userId=req.userId;
  const Bus=new Book(BusBook)
  await Bus.save();

  res.status(201).json({message:"Succefully success"})

  }

  catch(error){
    console.log(error)
    res.status(500).json({message:"Something Badly wrong"})


  }
})
export default router


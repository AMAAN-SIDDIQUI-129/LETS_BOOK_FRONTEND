import cloudinary from 'cloudinary'
import express from "express"
import {Request,Response} from 'express'
import multer from 'multer'
import Book from '../models/Hotel'
import {BookType} from '../shared/type'
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
router.post('/Bus',verfiyToken,[
  body("name").notEmpty().withMessage("name is must required"),
  body("city").notEmpty().withMessage("city is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("description").notEmpty().withMessage("description field is required"),
  body("type").notEmpty().withMessage("type field is required"),
  body('priceperTrip').notEmpty().isNumeric().withMessage("Price per trip is required"),
  body("rating").notEmpty().withMessage("rating field is required"),


],upload.array("imageFile",6),async(req:Request,res:Response)=>{
  const imageFile=req.files as Express.Multer.File[]
  const BusBook:BookType=req.body
  try{

  
  const imageUrl = await uploadImages(imageFile)
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
router.get('/',verfiyToken,async(req:Request,res:Response)=>{
 
  try{
    const Company=await Book.find({userId:req.userId})
    res.json(Company)


  }catch(error){
    console.log(error)
    res.status(500).json({message:"Compnay not found"})
  }
})
router.get('/:id',verfiyToken,async(req:Request,res:Response)=>{
  const id=req.params.id.toString()
  try{
    const Company=await Book.findOne({
      _id:id,
      userId:req.userId,

    });
    res.json(Company)

  }catch(error){
    console.log(error)
    res.status(501).json({message:"Compnay not found plzz register Company "})
  }
})
export default router

router.put('/:hotelId',verfiyToken,upload.array('imageFile'),async(req:Request,res:Response)=>{
  try{
    const UpdateCompnay:BookType=req.body
    UpdateCompnay.lastUpdated=new Date();
    const Tour=await Book.findOneAndUpdate({
      _id:req.params.TourId,
      userId:req.userId,

    },
    UpdateCompnay,
    {new:true}
  )
  if(!Tour){
    res.status(401).json({message:"Tour not Get"})
  }
  const files=req.files as Express.Multer.File[]
  const updateimage=await uploadImages(files)
  Tour!.imageUrl=[...updateimage, ...(UpdateCompnay.imageUrl || [])]

await Tour?.save()
res.status(201).json(Tour)

  }catch(error){
    console.log(error)
    res.status(500).json({message:"Somethin Bad smell as usual"})
  }
})

async function uploadImages(imageFile: Express.Multer.File[]) {
  const uploadPromise = await imageFile.map(async (image) => {
    const b64image = Buffer.from(image.buffer).toString('base64')
    const dataUri = "data:" + image.mimetype + ";base64," + b64image
    const uploadResponse = await cloudinary.v2.uploader.upload(dataUri)
    return uploadResponse.url

  })
  const imageUrl = await Promise.all(uploadPromise)
  return imageUrl
}

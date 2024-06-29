import {Request,Response} from 'express'
import express from 'express'
import Book from '../models/Hotel'
const router=express.Router()
router.post('/:id',async(req:Request,res:Response)=>{
  const id =req.params.id.toString()

  try{
    const user=await Book.findByIdAndDelete(id)
    if(user){
      res.status(200).json({message:"succefull deleted"})
    }

    res.json(user)
  }
 
  catch(error){
    console.log(error)
  }

})
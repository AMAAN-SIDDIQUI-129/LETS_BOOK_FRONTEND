import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import { Request,Response } from 'express'
import mongoose from 'mongoose'
import UserRoute from './routes/user'
import auth from './routes/auths'
import path from 'path'
const app=express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(
  cors({
  origin: process.env.FRONTEND_URL,
  credentials:true,
}))

app.get("/api/test",async(req:Request,res:Response)=>{
  res.json({message:"following working and intialize"})
})
app.use("/api/my/users",UserRoute)
app.use("/api/secure",auth)
app.listen(4000,()=>{
  console.log("server has intialiaze at 7000 ")
})
app.use(express.static(path.join(__dirname,"../../frontend/dist")))
mongoose.connect(process.env.MONGO_DB_STRING as string).then(()=>{
  console.log("finally connectes to database")
})





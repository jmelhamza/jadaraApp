import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
   
dotenv.config()
export  const connectDB = async ()=>{
  try {
    await mongoose.connect(process.env.URL)
    console.log('db connected success');
  } catch (error) {
    console.log(error.message);
  }
}


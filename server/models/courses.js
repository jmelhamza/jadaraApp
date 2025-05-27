import mongoose from "mongoose"
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
     },
     description:{
      type: String,
    required : true},
    group: {
      type:String,
      required : true},
      time: {
         type:String,
      required : true
      },
      status:{
         type:String,
      required : true
      },
     });
     
     const Courses = mongoose.model('Courses', coursesSchema);
     
     export default Courses ;
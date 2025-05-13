import mongoose from "mongoose"
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
     },
     });
     
     const Courses = mongoose.model('Courses', coursesSchema);
     
     export default Courses ;
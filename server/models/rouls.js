import mongoose from "mongoose"
const roulSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
     },
    title:{
     type: String
    },
    cours_length:{
      type: Number
    }
     });

     const Rouls = mongoose.model('Rouls', roulSchema);
     
     export default Rouls ;
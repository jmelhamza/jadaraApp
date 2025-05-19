import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
    password: {
    type: String,
    required: true,
    minlength: 6 
  }
  });

const Users = mongoose.model('Users', userSchema);

export default Users;
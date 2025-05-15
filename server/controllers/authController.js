import bcrypt from "bcrypt" ;
import jwt from 'jsonwebtoken';
import Users from '../models/student.js'
import dotenv from "dotenv"

// const password = "red123"

// const hashPass = ()=>  {bcrypt.hash (password, 10,(err, hash)=>{
//     if (err) throw err;
//     console.log (hash)
// });}

// hashPass()

dotenv.config()

 export  const register =  async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({ username, email, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export  const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed try Again' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed try Again' });
    }

    // Create  JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SERCRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed try Again' });
  }
};


 
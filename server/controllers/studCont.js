
import Users from "../models/student.js"


const getDetailUser = async (req, res) => {
    try {
        const result =  await Users.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message : "Error in fetching" })
    }
}

const postUsers = async (req, res) => {
    try {
        const newUser = new Users(req.body);
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message : "Error in post" })
    }
}

const putUser = async (req, res) => {
    const {id} = req.params
    const detail = req.body
    try {
        const result = await Users.findByIdAndUpdate(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message : "Error in put" })
    }
}

const deletUser = async (req, res) => {
    const {id} = req.params
    const detail = req.body
    try {
        const result = await Users.findByIdAndDelete(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message : "Error in delete" })
    }
}

export { getDetailUser, postUsers, putUser, deletUser }
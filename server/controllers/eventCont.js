// import { request } from "express";
import Event from "../models/event.js";

//get one event
const getDetailEvnt = async (req, res) => {
  try {
    const result = await Event.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching is bolshet" });
  }
};


const postEvents = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error in post " });
  }
};


const putEvent = async (req,res) => {
    const {id} = req.params
    const detail = req.body
    try{
        const result = await Event.findOneAndUpdate(id.detail,{new:true})
        if(!result){
        return res.status(404).json({ message : "not found"})
        }
    }catch (error) {
        res.status(500).json({messag:"Error in puttt" })
    }
}

const deleteEvent = async (req,res) =>{
    const {id} = req.params
    const detail = req.body
    try {
        const result =await Events.findByIAndDelete(id,detail,{new:true})
        if(!result){
            return res.status(404).json({message:"Not founs"})
        }
        res.status(200).json(result)
    }catch(error){
res.status(500).json({message : "Error in delet"})
    }
}
export {getDetailEvnt , postEvents , putEvent ,deleteEvent }
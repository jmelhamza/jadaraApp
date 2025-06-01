// import { request } from "express";
import Event from "../models/event.js";


const getDetailEvnt = async (req, res) => {
    try {
        const events = await Event.find();

        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Error fetching events. Please try again later." });
    }
};



const postEvents = async (req, res) => {
  try {
    const { title, date, location, image } = req.body;
    const newEvent = new Event({ title, date, location, image }); 

    await newEvent.save();

    res.status(201).json({ message: "Event created", event: newEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
};



const putEvent = async (req,res) => {
    const {id} = req.params
    const detail = req.body
    try {
        const result = await Event.findByIdAndUpdate(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message : "Error in put" })
    }
}

const deleteEvent = async (req,res) =>{
    const {id} = req.params
    try {
        const result =await Event.findByIdAndDelete(id)
        if(!result){
            return res.status(404).json({message:"Not found"})
        }
        res.status(200).json(result)
    }catch(error){
res.status(500).json({message : "Error in delete"})
    }
}
export {getDetailEvnt , postEvents , putEvent ,deleteEvent }
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
        const { title, date, location } = req.body;
        const image = req.file ? req.file.path : null;

        const newEvent = new Event({ title, date, location, image });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: "Error creating event" });
    }
};


const putEvent = async (req,res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        if (req.file) updatedData.image = req.file.path;

        const event = await Event.findByIdAndUpdate(id, updatedData, { new: true });
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: "Error updating event" });
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
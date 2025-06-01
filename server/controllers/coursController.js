
import Courses from "../models/courses.js";


export const createCourse = async (req, res) => {
  const {description,name,status,time,group}=req.body
  try {
    const course = new Courses({ description , name ,status,time,group });
    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Failed to create course" });
  }
};


export const getAllCourses = async (req, res) => {
  try {
    const courses = await Courses.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};


export const getCourseById = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Error fetching course" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Courses.findByIdAndUpdate(
      req.params.id,
      // { name: req.body.name },
       {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        time: req.body.time,
        group: req.body.group,
      },
      { new: true }
    );
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course updated", course });
  } catch (error) {
    res.status(500).json({ error: "Failed to update course" });
  }
};


export const deleteCourse = async (req, res) => {
  try {
    const course = await Courses.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete course" });
  }
};



"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table"

import MyForm from "../../Admincourses/piece/Addcourse.tsx"

export default function CourseManager() {
  const [courses, setCourses] = useState([])
  const [editingCourse, setEditingCourse] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:4000/courses")
    setCourses(res.data)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const handleFormSubmit = async (data) => {
    try {
      if (editingCourse) {
        await axios.put(`http://localhost:4000/courses/${editingCourse._id}`, data)
      } else {
        await axios.post("http://localhost:4000/courses", data)
      }
      fetchCourses()
      setShowForm(false)
      setEditingCourse(null)
    } catch (err) {
      console.error("Error submitting form", err)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this course?")) return
    await axios.delete(`http://localhost:4000/courses/${id}`)
    fetchCourses()
  }

  const handleEdit = (course) => {
    setEditingCourse(course)
    setShowForm(true)
  }

  return (
    <div className="p-6 space-y-8">
      <Button onClick={() => {
        setEditingCourse(null)
        setShowForm(!showForm)
      }}>
        {showForm ? "Close Form" : "Add New Course"}
      </Button>

      {showForm && (
        <MyForm
          initialData={editingCourse}
          onSubmit={handleFormSubmit}
        />
      )}

      <Table className="w-[70vw]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Group</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course._id}>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.status}</TableCell>
              <TableCell>{course.time}</TableCell>
              <TableCell>{course.group}</TableCell>
              <TableCell className="space-x-2">
                <Button variant="outline" onClick={() => handleEdit(course)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(course._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

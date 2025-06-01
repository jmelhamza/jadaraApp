
// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogTrigger,
// //   DialogContent,
// } from "@/components/ui/dialog"
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
// // import { toast } from "@/components/ui/use-toast"
// // import CourseForm from "./CourseForm"



//  import MyForm from "../../Admincourses/piece/Addcourse.tsx"

 
// export default function CourseManager() {
//   const [courses, setCourses] = useState([])
//   const [modalOpen, setModalOpen] = useState(false)
//   const [editingCourse, setEditingCourse] = useState(null)
//   const [addcourse,setaddcourse] = useState(false)



//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/courses")
//       setCourses(res.data)
//     } catch (err) {
//     //   toast({ title: "Failed to fetch courses", variant: "destructive" })
//     }
//   }

//   useEffect(() => {
//     fetchCourses()
//   }, [courses])

//   const handleAdd = async (data) => {
    
//     try {
//       if (editingCourse) {
//         // await axios.put(`http://localhost:4000/courses/${editingCourse._id}`, data)

//         await axios.put(`http://localhost:4000/courses/${courseId}`, updatedData)

        
//         // toast({ title: "Course updated successfully!" })
//       } else {
//         await axios.post("http://localhost:4000/courses", data)
//         // toast({ title: "Course added successfully!" })
//       }
//       setModalOpen(false)
//       setEditingCourse(null)
//       fetchCourses()
//     } catch (err) {
//     //   toast({ title: "Failed to submit course", variant: "destructive" })
//     }
//   }

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this course?")) return
//     try {
//       await axios.delete(`http://localhost:4000/courses/${id}`)
//     //   toast({ title: "Course deleted." })
//       fetchCourses()
//     } catch (err) {
//     //   toast({ title: "Failed to delete course", variant: "destructive" })
//     }
//   }

// //   const handleEdit = (course) => {
// //     setEditingCourse(course)
// //     setModalOpen(true)
// //   }

//   return (
//     <div className="p-6 space-y-8">
//       {/* Add or Edit Course Modal */}
//       <Dialog open={modalOpen} onOpenChange={(v) => {
//         if (!v) setEditingCourse(null)
//         setModalOpen(v)
//       }}>
//         <DialogTrigger asChild>
//           <Button onClick={()=>{ addcourse == false ? setaddcourse(true): setaddcourse(false)}  }>Add New Course</Button>
//         </DialogTrigger>
//         {/* <DialogContent>
//           <CourseForm
//             onAdd={handleAdd}
//             initialData={editingCourse}
//             onCancel={() => {
//               setModalOpen(false)
//               setEditingCourse(null)
//             }}
//           />
//         </DialogContent> */}
//       </Dialog>

//       {addcourse == true? <MyForm/>:""}

//       {/* Table */}
//       <Table className="w-full">
//         <TableHeader>
//           <TableRow>
//             <TableHead>Name</TableHead>
//             <TableHead>Description</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Time</TableHead>
//             <TableHead>Group</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {courses.map((course) => (
//             <TableRow key={course._id}>
//               <TableCell>{course.name}</TableCell>
//               <TableCell>{course.description}</TableCell>
//               <TableCell>{course.status}</TableCell>
//               <TableCell>{course.time}</TableCell>
//               <TableCell>{course.group}</TableCell>
//               <TableCell className="space-x-2">
//                 <Button variant="outline" onClick={()=>{ addcourse == false ? setaddcourse(true):setEditingCourse(null)(course._id)} }>Edit</Button>
//                 <Button
//                   variant="destructive"
//                   onClick={() => handleDelete(course._id)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }



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

      <Table className="w-full">
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

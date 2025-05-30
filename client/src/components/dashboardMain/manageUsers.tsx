
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from "axios"
import { useEffect, useState, createContext } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import EditForm from "./formToEditGroupe"


const UserContext = createContext([])

export function Users() {

    const [ students, setStudents ] = useState([])
    const [ showForm, setShowForm ] =useState(false)
    const [ name, setName ] = useState('')
    const [ studId, setId ] = useState('')
    const [ isDelete, setIsDelete ] = useState(false)

    const hide = () => {
        setShowForm(false)
    }

    useEffect(() => {
        axios.get("http://localhost:4000/api/add")
        .then((res)=>{
            setStudents(res.data.filter((user) => user.role !== "admin" ))
        })
        .catch((err) => console.log(err) )
    },[isDelete, showForm])

    const deleteStudent = (id) => {

    if(confirm("Are you sure !")){
        axios.delete(`http://localhost:4000/api/delete/${id}`)
        .then((res) => console.log(res))
        .catch((err)  => console.log(err));
        if(isDelete){
            setIsDelete(false)
        }else{
            setIsDelete(true)
        }
    }else{
        return;
    }
    }

  return (
    <UserContext.Provider value={ students }>
    <Table className="w-4/5 place-self-center">
      <TableCaption>A list of your recent students.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">N</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Groupe</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((ele, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{ i+1 }</TableCell>
            <TableCell>{ele.username}</TableCell>
            <TableCell>{ele.email}</TableCell>
            <TableCell>{ele.role}</TableCell>
            <TableCell>{ (ele.groupe == null) ? "New" : ele.groupe }</TableCell>
            <TableCell className="text-medium flex gap-3">
                <FaEdit onClick={ () =>{ setShowForm(true); setName(ele.username); setId(ele._id) }} size={20}/>
                <FaTrash onClick={()=>{ deleteStudent(ele._id) }} size={20}/>
                
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">{ students.length }</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    { showForm && <EditForm fun={ hide } name={ name } id={ studId }/> }
    </UserContext.Provider>
  )
}

export { UserContext }

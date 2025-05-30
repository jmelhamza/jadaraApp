
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
import { MyToken } from "../layout"
import { useContext, useEffect, useState } from "react"
import axios from "axios"


export function TableDemo() {

    const data = useContext(MyToken)
    const [ myClass, setMyClass ] = useState([])
    const [ students, setStudents ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/api/add")
        .then((res)=>{
            setStudents(res.data.filter((user) => user.role !== "admin" ))
        })
        .catch((err) => console.log(err) )
    },[])


    useEffect(()=>{
        console.log(data)
        if(data.groupe){ 
            setMyClass([])
        }else{
            setMyClass(students.filter((ele)=> ele.groupe !== data.groupe ))
        }
    },[data, students])

  return (
    (myClass.length > 0 ) ? 
    <Table className="w-4/5 place-self-center">
      <TableCaption>A list of your recent classteam.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">N</TableHead>
          <TableHead>Student</TableHead>
          <TableHead>Groupe</TableHead>
          <TableHead>status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { myClass.map((student, i) => (
          <TableRow key={ i }>
            <TableCell className="font-medium">{ i+1 }</TableCell>
            <TableCell>{student.username}</TableCell>
            <TableCell>{student.groupe}</TableCell>
            <TableCell>In progress</TableCell>
            
          </TableRow>
        ))     
                
            }
      </TableBody>
      <TableFooter>
        {myClass.length > 0 &&<TableRow>
          
           <TableCell colSpan={3}>Total</TableCell>
           <TableCell className="text-right">{ myClass.length }</TableCell>
        </TableRow>}
      </TableFooter>
    </Table>
    : <h2 className="text-right">Contact your manager about your groupe!</h2>
  )
}

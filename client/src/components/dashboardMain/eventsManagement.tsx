
import { Button } from "../ui/button"
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
import EditEvent from "./formEvents" 
import PostEvent from "./postEvent"


const UserContext = createContext([])

export function Events() {

    const [ events, setEvents ] = useState([])
    const [ showForm, setShowForm ] =useState(false)
    const [ title, setTitle ] = useState('')
    const [ date, setDate ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ image, setImage ] = useState('')
    const [ studId, setId ] = useState('')
    const [ isDelete, setIsDelete ] = useState(false)
    const [ toAdd, setToAdd ] = useState(false)

    const hide = () => {
        setShowForm(false)
    }
    const hideAddForm = () => {
        setToAdd(false)
    }


    useEffect(() => {
        axios.get("http://localhost:4000/addevent")
        .then((res)=>{
            setEvents(res.data)
        })
        .catch((err) => console.log(err) )
    },[isDelete, showForm, toAdd])

    const deleteEvent = (id) => {

    if(confirm("Are you sure !")){
        axios.delete(`http://localhost:4000/deletevent/${id}`)
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
    <>
    <Button onClick={()=> setToAdd(true)} >Add New Event</Button>
    <Table className="w-4/5 place-self-center">
      <TableCaption>A list of your recent events.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">N</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((ele, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{ i+1 }</TableCell>
            <TableCell>{ele.title}</TableCell>
            <TableCell>{ele.date}</TableCell>
            <TableCell>{ele.location}</TableCell>
            <TableCell><img src={ele.image} height={"20px"} width={"20px"} alt="" /></TableCell>
            <TableCell className="text-medium flex gap-3">
                <FaEdit onClick={ () =>{ setShowForm(true); setTitle(ele.title); setDate(ele.date); setLocation(ele.location); setId(ele._id) ; setImage(ele.image) }} size={20}/>
                <FaTrash onClick={()=>{ deleteEvent(ele._id) }} size={20}/>
                
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">{ events.length }</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    { showForm && <EditEvent fun={ hide } title={ title } date={ date } location={ location } image={ image } id={ studId }/> }
    { toAdd && <PostEvent fun={ hideAddForm }/> }
    </>
  )
}

export { UserContext }

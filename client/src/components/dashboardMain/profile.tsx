import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { FaUser } from "react-icons/fa"
import { useContext, useState, useEffect } from "react"
import { MyToken } from "../layout"
import axios from "axios"




const Profile = () => {

    const data = useContext(MyToken)
    const [ student, setStudent ] = useState(null)

    useEffect(() => {
            axios.get("http://localhost:4000/api/add")
            .then((res)=>{
                setStudent(res.data.find((user) => user._id === data.userId ))
            })
            .catch((err) => console.log(err) )
        },[data])

return (
    <>
        <Card className="absolute top-32 w-4/5 h-4/5 flex justify-center items-center text-4xl">
        <CardContent className="h-3/5 w-3/5 flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-center h-2/5">
            {student && student.image ? 
                    <img src={student.image} loading="lazy" alt="student img" style={{ borderRadius: "50%", height: "200px", width: "150px", objectFit: "cover" }} />
                    : <FaUser size={100}/>
}

            </div>
            
            <p className="mt-12">Hello!</p>
            { student && <CardTitle className="mt-5"> { student.username } </CardTitle>}
        </CardContent>
        </Card>
    </>
    )
}

export default Profile

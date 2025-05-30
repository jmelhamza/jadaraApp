import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { FaUser } from "react-icons/fa"
import { useContext } from "react"
import { MyToken } from "../layout"





const Profile = () => {

    const data = useContext(MyToken)

return (
    <>
        <Card className="absolute top-32 w-4/5 h-4/5 flex justify-center items-center text-4xl">
        <CardContent className="h-3/5 w-3/5 flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-center h-2/5">
            <FaUser size={100}/>
            <CardTitle> { data.username } </CardTitle>
            </div>
            <CardDescription>{ (data.role == "admin")? "hello Mr, its your space ( Kolchi dyalk )": "hello Student!" }</CardDescription>
            <p>Card Content</p>
        </CardContent>
        </Card>
    </>
    )
}

export default Profile

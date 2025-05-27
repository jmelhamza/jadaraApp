import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    // CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaUser } from "react-icons/fa"



const Profile = () => {


return (
    <>
        <Card className="absolute top-32 w-4/5 h-4/5 flex justify-center items-center text-4xl">
        <CardContent className="h-3/5 w-3/5 flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-center h-2/5">
            <FaUser size={100}/>
            <CardTitle>Jhone Doe</CardTitle>
            </div>
            <CardDescription>Card Description</CardDescription>
            <p>Card Content</p>
        </CardContent>
        {/* <CardFooter>
            <p>Card Footer</p>
        </CardFooter> */}
        </Card>
    </>
    )
}

export default Profile

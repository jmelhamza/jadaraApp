



import { MyToken } from "@/components/layout"
import { useContext } from "react"
import { Users } from "../manageUsers"
import { TableDemo } from "../newUser"

const UsersRole = () => {

    const data = useContext(MyToken)

    return (
            <>
                { data.role == "admin" ? <Users /> : <TableDemo/> }
            </>
)
}

export default UsersRole
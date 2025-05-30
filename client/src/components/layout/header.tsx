import { Navbar1 } from "../navbar1"
import { MyToken } from "."
import { useContext } from "react"



export const Header = () => {

    const data = useContext(MyToken)

    return (

     <>  
     { data &&  <Navbar1 username = { data.username }   />}
     </> 
    )
}
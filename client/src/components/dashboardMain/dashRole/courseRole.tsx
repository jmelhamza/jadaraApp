
import MyTable from "@/components/courrses/cours"
import { MyToken } from "@/components/layout"
import { useContext } from "react"

const CourseRole = () => {

    const data = useContext(MyToken)

    return (
            <>
                { data.role == "admin" ? <h1> Sorry Admin we are waiting Anas ...</h1> : <MyTable/> }
            </>
)
}

export default CourseRole

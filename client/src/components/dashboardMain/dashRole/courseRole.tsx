
import CourseManager from "@/components/Admincourses/piece/lestcourses"
import MyTable from "@/components/courrses/cours"
import { MyToken } from "@/components/layout"
import { useContext } from "react"

const CourseRole = () => {

    const data = useContext(MyToken)

    return (
            <>
                { data.role == "admin" ? <CourseManager/> : <MyTable/> }
            </>
)
}

export default CourseRole

import { Button } from "@/components/ui/button"
import MyTable from "../courrses/cours.tsx"




export default function AddCourseButton() {
  return (
  <>
  <div className="justify-end">
  <Button  className="w-32  bg-green-600 hover:bg-green-700 text-white ">
    Add Course
  </Button>
  </div>
 <MyTable/>
  </>
  )
}

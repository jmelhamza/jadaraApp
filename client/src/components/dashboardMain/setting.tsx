
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LogOut } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"
import { ModeToggle } from "../darkMode/modeToggel"
import { Link } from "react-router-dom"

export function AccordionDemo() {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/")
    }


  return (
    <Accordion type="single" collapsible className="absolute top-32 w-2/5 h-4/5 flex flex-col justify-center items-start text-4xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>My data</AccordionTrigger>
        <Link to={"/profile/myData"}>
        <AccordionContent>
          Edit My data
        </AccordionContent>
        </Link>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Dark Mode</AccordionTrigger>
        <AccordionContent>
          <ModeToggle />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Log out?</AccordionTrigger>
        <AccordionContent>
        <LogOut size={20} onClick={logOut} /> 
        </AccordionContent>     
      </AccordionItem>
    </Accordion>
  )
}

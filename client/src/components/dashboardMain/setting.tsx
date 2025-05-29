
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaBackspace } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export function AccordionDemo() {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/")
    }


  return (
    <Accordion type="single" collapsible className="absolute top-32 w-2/5 h-4/5 flex flex-col justify-center items-start text-4xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Log out?</AccordionTrigger>
        <AccordionContent>
           <FaBackspace size={30} onClick={logOut} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

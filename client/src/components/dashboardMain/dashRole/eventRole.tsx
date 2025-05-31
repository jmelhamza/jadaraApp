
import { CarouselSpacing } from "@/components/events/event"
import { MyToken } from "@/components/layout"
import { useContext } from "react"
import { Events } from "../eventsManagement"


const EventRole = () => {

    const data = useContext(MyToken)

    return (
            <>
                { data.role == "admin" ? <Events/> : <CarouselSpacing/> }
            </>
)
}

export default EventRole

import { CarouselSpacing } from "@/components/events/event"
import { MyToken } from "@/components/layout"
import { useContext } from "react"


const EventRole = () => {

    const data = useContext(MyToken)

    return (
            <>
                { data.role == "admin" ? <h1> Sorry Admin we are waiting Redouan ...</h1> : <CarouselSpacing/> }
            </>
)
}

export default EventRole
import * as React from "react"
import { useEffect ,useState } from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
type Event = {
  title: string;
  description: string;
  date: string; 
  location: string;
}
export function CarouselSpacing() {
    const [events, setEvents] = useState<Event[]>([])
    useEffect(() => {
  fetch("http://localhost:4000/eventRouter")
    .then((res) => res.json())
    .then((data) => setEvents(data))
    .catch((err) => console.error("Fetch failed", err));
}, []);
  return (
    
    <Carousel className="w-full max-w-lg">
      <CarouselContent className="-ml-1">
        {events.map((event, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  
                <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="text-sm text-muted-foreground">{event.description}</p>
          <p className="text-sm text-gray-500">
            📍 {event.location}  {new Date(event.date).toLocaleDateString()}
          </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

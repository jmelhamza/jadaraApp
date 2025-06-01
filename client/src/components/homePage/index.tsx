

import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import useAuthRedirect from "@/hooks/useRedirect"
import { CarouselSpacing } from "../events/event"


const Index = () => {

  useAuthRedirect()


  return (
    <>

        <Header />
        <main className="flex justify-center items-center w-full h-[75vh]"
>
        <CarouselSpacing/>
        </main>
        <Footer />

    </>
  )
}

export default Index
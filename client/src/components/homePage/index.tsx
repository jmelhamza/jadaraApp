

import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { CarouselSection } from "../main/main"
import { useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"

const Index = () => {

  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) return;
  
      try {
          const { exp } = jwtDecode(token);
          if (Date.now() >= exp * 1000) {
              
              localStorage.removeItem("token");
          } else {
              navigate("/profile");
          }
      } catch (err) {
          
          console.log(err)
          localStorage.removeItem("token");
      }
  }, [navigate]);

  return (
    <>

        <Header />
        <CarouselSection />
        <Footer />

    </>
  )
}

export default Index
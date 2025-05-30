

import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { CarouselSection } from "../main/main"
import useAuthRedirect from "@/hooks/useRedirect"
// import { useEffect } from "react"
// import { jwtDecode } from "jwt-decode"
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"

const Index = () => {

  useAuthRedirect()
  // const navigate = useNavigate()

  // useEffect(()=>{
  //   if (localStorage.getItem("token")) {
  //     navigate("/profile");
  //   }

  // },[navigate])

  


//   useEffect(() => {
//       const token = localStorage.getItem("token");
//       if (!token) return;
  
//       try {
//           const { exp } = jwtDecode(token);
//           if (Date.now() >= exp * 1000) {
              
//               localStorage.removeItem("token");
//           } else {
//               navigate("/profile");
//           }
//       } catch (err) {
          
//           console.log(err)
//           localStorage.removeItem("token");
//       }
//   }, [navigate]);

  return (
    <>

        <Header />
        <CarouselSection />
        <Footer />

    </>
  )
}

export default Index
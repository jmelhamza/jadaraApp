




// import Login from "./components/forms/loginForm"

// import Profile from "../dashboardMain/profile"
import { Header } from "./header"
import Layout from "./Layout"
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
// import { AccordionDemo } from "../dashboardMain/setting"




function Dashboard () {

    const navigate =useNavigate()
    const [data, setData]= useState(null)

useEffect(() => {


axios.get("http://localhost:4000/protected/profile", {
    withCredentials: true,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
})
.then((res) => {
    setData(res.data.user)
    console.log(data)
})
.catch((err) => {
    console.log(err); 
    navigate("/forms"); 
});

}, [navigate,data]);

useEffect(()=>{
  window.addEventListener("popstate", ()=>{

    const token = localStorage.getItem("token");
        if (token) {
          return;
        }
    
        // try {
        //     const { exp } = jwtDecode(token);
        //     if (Date.now() >= exp * 1000) {
                
        //         localStorage.removeItem("token");
        //     } else {
        //         navigate("/profile");
        //     }
        // } catch (err) {
            
        //     console.log(err)
        //     localStorage.removeItem("token");
        // }

  } )
},[navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Header />
      <Layout/>
      {
      // { data && <Profile userId = {data.userId}/>}
      // <AccordionDemo />
      }
      <Outlet/>
    </div>
    
  )
}

export default Dashboard








// import Login from "./components/forms/loginForm"

// import Profile from "../dashboardMain/profile"
import { Header } from "./header"
import Layout from "./Layout"
import { useEffect, useState, createContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
// import { AccordionDemo } from "../dashboardMain/setting"


const MyToken = createContext({})

function Dashboard () {

    const navigate =useNavigate()
    const [data, setData]= useState({})

    

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


  return (
    <MyToken.Provider value={ data }>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Header />
      <Layout/>
      {
      // { data && <Profile userId = {data.userId}/>}
      // <AccordionDemo />
      }
      <Outlet/>
    </div>
    </MyToken.Provider>
    
  )
}

export default Dashboard
export { MyToken }







// import Login from "./components/forms/loginForm"

import Profile from "../Profile/profile"
import { Header } from "./header"
import Layout from "./Layout"


function Dashboard
() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Header />
      <Layout/>
      <Profile/>
      {/* <Login/> */}
    </div>
  )
}

export default Dashboard



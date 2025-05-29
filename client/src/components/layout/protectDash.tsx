
import Dashboard from "./index"
import { Navigate } from "react-router-dom"

const ProtectDash = () => {


    const token = localStorage.getItem("token")

    return (
        <>
            { (token) ? <Dashboard/>  : <Navigate to="/forms" />}
        </>
    )
}

export default ProtectDash




import { MyToken } from "@/components/layout"
import { useContext } from "react"
import { Component } from "../chart"
import Profile from "../profile"

const InfoRole = () => {

    const data = useContext(MyToken)

    return (
            <>
                { data.role ? ( data.role === "admin" ? <Component /> : <Profile/> ) : <h1>Loading ...</h1> }
            </>
)
}

export default InfoRole
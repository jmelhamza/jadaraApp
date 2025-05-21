import React from "react"
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { CarouselSection } from "./components/main/main"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CarouselSection />
      <Footer />


// import MyForm from "./components/forms/registerForm"

import Login from "./components/forms/loginForm"

// import Layout from "./components/layout/Layout"


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      {/* <MyForm/> */}
      {/* <Layout/> */}
      <Login/>
    </div>
  )
}

export default App

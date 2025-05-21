import React from "react"
import { Button } from "../ui/button"
 
export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow bg-white">
      <div className="flex items-center space-x-3">
        <img src="/jadara.jpg" alt="Jadara Logo" className="w-27 h-22 object-cover" />

        {/* <span className="text-2xl font-bold text-gray-800">Jadara</span> */}
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-700">
        {/* <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Events</a>
        <a href="#" className="hover:text-blue-600">About</a> */}
      </nav>
      <div className="hidden md:flex space-x-2">
        <Button variant="outline">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  )
}

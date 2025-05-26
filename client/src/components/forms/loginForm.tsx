

import { useState } from "react"

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

 
  const LoginForm = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <a onClick={toggleForm} className="text-blue-600 hover:underline cursor-pointer">
          Sign up
        </a>
      </p>
    </div>
  )

  // Signup Form
  const SignUpForm = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="yourusername"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <a onClick={toggleForm} className="text-blue-600 hover:underline cursor-pointer">
          Log in
        </a>
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 w-full" style={{ width: '100vw' }}>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {isSignUp ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  )
}

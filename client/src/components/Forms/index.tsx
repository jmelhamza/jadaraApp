
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode"

import LoginForm from "./loginForm";
import SignUpForm from "./signupform";

export default function AuthForm() {
  const navigate = useNavigate();




  const [isSignUp, setIsSignUp] = useState(false);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [username, setUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const login = () => {
    axios.post("http://localhost:4000/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed authentication");
      });
  };



  const signUp = () => {
    axios.post("http://localhost:4000/auth/register", {
        username,
        email: newEmail,
        password: newPassword,
      })
      .then((res) => {
        console.log("Signup success:", res);
        setIsSignUp(false)
      })
      .catch((err) => {
        console.error(err);
        alert("Signup failed");
      });
  };

  

  useEffect(()=>{
      if (localStorage.getItem("token")) {
        navigate("/profile");
      }
  
    },[navigate])
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {

//         const { exp } = jwtDecode(token);
//         if (Date.now() >= exp * 1000) {
            
//             localStorage.removeItem("token");
//         } else {
//             navigate("/profile");
//         }
//     } catch (err) {
        
//         console.log(err)
//         localStorage.removeItem("token");
//     }
// }, [navigate]);

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 w-full"
      style={{ width: "100vw" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {isSignUp ? (
          <SignUpForm
            username={username}
            email={newEmail}
            password={newPassword}
            setUsername={setUsername}
            setEmail={setNewEmail}
            setPassword={setNewPassword}
            onSubmit={(e) => {
              e.preventDefault();
              signUp();
            }}
            toggleForm={toggleForm}
          />
        ) : (
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
            toggleForm={toggleForm}
          />
        )}
      </div>
    </div>
  );
}



import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MyToken } from "../layout"


const EditMyData = () => {

    const data = useContext(MyToken)

    const [ username, setUsername ] = useState(data.username)
    const [ email, setEmail ] = useState(data.email)
    const [image, setImage] = useState(data.image)

    const navigate = useNavigate()

    useEffect(()=>{
        console.log(data)
    },[data])

const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setImage(reader.result);
    };

    reader.readAsDataURL(file);

    reader.onerror = (error) => {
        console.error("Error encoding image:", error)
    };
};


    const update = () => {
        axios.put(`http://localhost:4000/api/put/${data.userId}`, { username, email, image })
        .then((res)=>{ 
            console.log(res)
            navigate("/profile")
            alert("Data updated Successfuly")
        })
        .catch((err) =>{ 
            console.log(err)
            alert("Failed plz try again")
        })
    }

return (
    <div className="absolute top-50 w-3/5 h-3/5 flex flex-col justify-center items-center  gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h2>{ data.username }</h2>
        <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        {/* <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
        <input
                type="file"
                onChange={handleFileUpload} 
                className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <button onClick={()=>{ update() }} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Up date
        </button>
        </div>

)
}

export default EditMyData

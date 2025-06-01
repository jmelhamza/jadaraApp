

import axios from "axios"
import { useState } from "react"



const PostEvent = (props) => {

    const [ title, setTitle ] = useState('')
    const [ date, setDate ] = useState('')
    const [ location, setLocation ] = useState('')
    const [image, setImage] = useState('')


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


const post = async () => {


    const eventData = {
        title,
        date,
        location,
        image, 
    };

    try {
        const res = await axios.post("http://localhost:4000/postevent", eventData, {
            headers: { "Content-Type": "application/json" },
        });
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};


return (
    <div className="absolute top-50 start-100 w-2/5 h-2/5 flex flex-col items-center  gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        
        <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <input
            type="date"
            placeholder="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <input
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <input
                type="file"
                onChange={handleFileUpload} 
                className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <button onClick={()=>{ props.fun(); post() }} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Add +
        </button>
        </div>

)
}

export default PostEvent

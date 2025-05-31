

import axios from "axios"
import { useState } from "react"



const PostEvent = (props) => {

    const [ title, setTitle ] = useState('')
    const [ date, setDate ] = useState('')
    const [ location, setLocation ] = useState('')
    const [image, setImage] = useState(null)


    const post = async () => {
        if (!image) {
            console.error("No image");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("date", date);
        formData.append("location", location);
        formData.append("image", image); 

        try {
            const res = await axios.post("http://localhost:4000/postevent", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log( res.data);
        } catch (err) {
            console.error(err);
        }
    }

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
            type="text"
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
                onChange={(e) => setImage(e.target.files[0])} 
                className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <button onClick={()=>{ props.fun(); post() }} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Add +
        </button>
        </div>

)
}

export default PostEvent


import axios from "axios"
import { useState } from "react"



const EditEvent = (props) => {

    const [ title, setTitle ] = useState(props.title)
    const [ date, setDate ] = useState(props.date)
    const [ location, setLocation ] = useState(props.location)
    const update = (id) => {
        axios.put(`http://localhost:4000/putevent/${id}`, { title, date, location })
        .then((res)=> console.log(res))
        .catch((err) => console.log(err))
    }

return (
    <div className="absolute top-50 start-100 w-2/5 h-2/5 flex flex-col items-center  gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h2>{ props.name }'s title</h2>
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

        <button onClick={()=>{ props.fun(); update(props.id) }} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Up Date
        </button>
        </div>

)
}

export default EditEvent

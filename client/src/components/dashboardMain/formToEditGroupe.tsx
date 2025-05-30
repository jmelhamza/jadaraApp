import axios from "axios"
import { useState } from "react"



const EditForm = (props) => {

    const [ groupe, setGroupe ] = useState('')

    const update = (id) => {
        axios.put(`http://localhost:4000/api/put/${id}`, { groupe })
        .then((res)=> console.log(res))
        .catch((err) => console.log(err))
    }

return (
    <div className="absolute top-50 start-100 w-2/5 h-1/5 flex flex-col items-center  gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h2>{ props.name }'s groupe</h2>
        <select
            value={groupe}
            onChange={(e) => setGroupe(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="" disabled>Select a group</option>
            <option value="1">Groupe 1</option>
            <option value="2">Groupe 2</option>
            <option value="3">Groupe 3</option>
            <option value="4">Groupe 4</option>
        </select>

        <button onClick={()=>{ props.fun(); update(props.id) }} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Up Date
        </button>
        </div>

)
}

export default EditForm


// import {create} from "zustand"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const initialState = {
//     user: null
// }




// export const useStore = create((set)=>({
//     ...initialState,
    
//     const navigate = useNavigate(),
    
//     getToken : async () => {
        

//     await axios.get("http://localhost:4000/protected/profile", {
//         withCredentials: true,
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//     })
//     .then((res) => {
//         console.log(res.data)
//         set({ user: res.data })
//     })
//     .catch((err) => {
//         console.log(err); 
//         navigate("/"); 
//     });


// }
// }))



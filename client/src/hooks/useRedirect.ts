

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

const useAuthRedirect = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/profile");
  //   }
  // }, [navigate]);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) return;
  
      try {
          const { exp } = jwtDecode(token);
          if (Date.now() >= exp * 1000) {
              
              localStorage.removeItem("token");
          } else {
              navigate("/profile");
          }
      } catch (err) {
          
          console.log(err)
          localStorage.removeItem("token");
      }
  }, [navigate]);

};

export default useAuthRedirect;

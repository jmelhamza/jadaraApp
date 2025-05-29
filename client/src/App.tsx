
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./components/homePage/index"; 
import Forms from "./components/Forms";  
import ProtectDash from './components/layout/protectDash';
import Profile from './components/dashboardMain/profile';
import { AccordionDemo } from './components/dashboardMain/setting';
import MyTable from './components/courrses/cours';
// import Profile from "./components/layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/forms",
    element: <Forms />,
  },
  {
    path: "/profile",
    element: <ProtectDash/>,
    children: [
      {
        index: true,
        element: <Profile/>,
      },
      {
        path: "/profile/setting",
        element: <AccordionDemo/>
      },
      {
        path: "/profile/courses",
        element: <MyTable/>
      }
    ]
  },

]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;


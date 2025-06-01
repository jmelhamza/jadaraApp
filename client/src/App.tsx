
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./components/homePage/index"; 
import Forms from "./components/Forms";  
import ProtectDash from './components/layout/protectDash';
import { AccordionDemo } from './components/dashboardMain/setting';
import CourseRole from './components/dashboardMain/dashRole/courseRole';
import EventRole from './components/dashboardMain/dashRole/eventRole';
import InfoRole from './components/dashboardMain/dashRole/infoRole';
import { ThemeProvider } from './components/darkMode/darkMode';
import UsersRole from './components/dashboardMain/dashRole/userRole';
import EditMyData from './components/dashboardMain/editData';

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
        element: <InfoRole/>,
      },
      {
        path: "/profile/setting",
        element: <AccordionDemo/>
      },
      {
        path: "/profile/groupe",
        element: <UsersRole/>
      },
      {
        path: "/profile/courses",
        element: <CourseRole/>
      },
      {
        path: "/profile/events",
        element: <EventRole/>
      },
      {
        path: "/profile/myData",
        element: <EditMyData/>
      },
    ]
  },

]);



function App() {

  return ( 
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />;

    </ThemeProvider>

  )
}

export default App;



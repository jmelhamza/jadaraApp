
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { CarouselSection } from "./components/main/main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Forms from "./components/Forms"; 

// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Forms",
    element: <Forms />, 
  },
]);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CarouselSection />
      <Footer />
</div>
)  }
// import MyForm from "./components/forms/registerForm"

// import Login from "./components/forms/loginForm"

// import Layout from "./components/layout/Layout"




export default App

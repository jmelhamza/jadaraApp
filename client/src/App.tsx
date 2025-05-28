
// import { Header } from "./components/header/header"
// import { Footer } from "./components/footer/footer"
// import { CarouselSection } from "./components/main/main"

// import  MyTable  from "./components/courrses/cours.tsx"


// import AddCourseButton from "./components/Admincourses/index.tsx"

// import MyForm from "./components/Admincourses/piece/Addcourse.tsx"
import CourseManager from "./components/Admincourses/piece/lestcourses.tsx"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header />
      <CarouselSection />
      <Footer /> */


        <CourseManager/>

          // <AddCourseButton/>
         
      // <MyTable/>
      }


</div>
  )
}
export default App 
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import SamplePost from "./Pages/SamplePost"
import Task3 from "./Pages/Task3"
import SignUp from "./Pages/SignUp"
import Notfound from "./Pages/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./Layout/MainLayout"

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SamplePost" element={<SamplePost />} />
          <Route path="/Task3" element={<Task3 />} />

        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/mainlayout";
import Home from './pages/Home'
import Service from './pages/Service'
import Feature from './pages/Feature'
import Services from './pages/Services'
import Blog from './pages/Blog'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

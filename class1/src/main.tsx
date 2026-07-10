import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import Home from './pages/Home'
import App from './App'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Blog from './pages/Blog'
// import Amader from './amader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      {/* <Amader/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


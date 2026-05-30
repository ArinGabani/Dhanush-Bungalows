import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectInfo from "./pages/ProjectInfo"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"

import './App.css'

// 🔥 AUTO SCROLL TO TOP ON PAGE CHANGE
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

// 🔥 Scroll To Top Button
function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-[#b97c80] to-[#d8a8aa] 
      text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
    >
      ↑
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* 🔥 ADD THIS */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<ProjectInfo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Scroll Button */}
      <ScrollToTopButton />

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}

export default App
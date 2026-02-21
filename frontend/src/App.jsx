import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Teams from "./pages/teams"; // ✅ correct
import Tournaments from "./pages/tournaments"; 
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";


import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./global.css";

export default function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/tournaments" element={<Tournaments/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>

      <Footer/>

    </BrowserRouter>

  );

}
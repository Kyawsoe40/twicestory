import { useState } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NavbarToggler from "./components/NavbarToggler/NavbarToggler";
import { Route,Routes } from "react-router-dom";
import Discography from "./components/Discography/Discography";
import Profiles from "./components/Profiles/Profiles";
import Footer from "./components/Footer/Footer";
import AlbumDetail from "./components/Discography/AlbumDetail";


function App() {
  const [isToggle,setIsToggle]=useState(false)
  const navToggler=(value)=>{
    setIsToggle(value)
  }
  const [initialPage,setInitialPage]=useState(0)

  return (
    <div className="App relative">
      <NavbarToggler navToggler={navToggler} isToggle={isToggle} />
      <Routes>
        <Route path="/" element={<Home setInitialPage={setInitialPage} />} />
        <Route path="/discography" element={<Discography initialPage={initialPage} setInitialPage={setInitialPage} />} />
        <Route path="/profiles" element={<Profiles setInitialPage={setInitialPage} />} />
        <Route path="/discography/:title" element={<AlbumDetail />} />
      </Routes>
      <Navbar navToggler={navToggler} isToggle={isToggle} />
      <Footer colour={"text-custom-dark"} />
    </div>
  );
}

export default App;

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./Frontend/Navbar/Navbar";
import Signup from "./Frontend/Signup/Signup";
import Login from "./Frontend/Login/Login";
import HeroSection from "./Frontend/Herosection/Herosection";

function App() {
  return (
    <Router>

 <Navbar/>
 <HeroSection/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;

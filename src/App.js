import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Frontend/Navbar/Navbar";
import Signup from "./Frontend/Signup/Signup";
import Login from "./Frontend/Login/Login";
import HeroSection from "./Frontend/Herosection/Herosection";
import IeltsPage from "./Frontend/IELTS/IELTS";
import GermanPage from "./Frontend/German/German";
import ChinesePage from "./Frontend/Chinese/Chinese";




function App() {
  return (
    <Router>
      {/* Navbar is always displayed */}
      <Navbar />

      {/* Content of routes will be displayed here */}
      <Routes>
        {/* HeroSection will only be shown on the homepage */}
        <Route path="/" element={<HeroSection />} />

        {/* Other routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/IeltsPage" element={<IeltsPage />} />
        <Route path="/GermanPage" element={<GermanPage />} />
        <Route path="/ChinesePage" element={<ChinesePage />} />
        

      </Routes>
    </Router>
  );
}

export default App;

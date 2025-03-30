import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./Frontend/Navbar/Navbar";
import Signup from "./Frontend/Signup/Signup";

function App() {
  return (
    <Router>
 <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import logo from "./assets/djmm-pro-logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";


function App() {
  return (
    <div className="app-container" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;



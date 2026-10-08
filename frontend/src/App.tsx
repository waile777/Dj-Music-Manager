import React from "react";
// import logo from "./assets/djmm-pro-logo.png";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="app-container" >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
      </Routes>
    </div>

  );
}

export default App;



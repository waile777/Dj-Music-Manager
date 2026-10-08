import React from "react";
import { Navigate } from "react-router-dom";




function GuestRoute({ children }: { children: React.ReactNode }) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default GuestRoute;
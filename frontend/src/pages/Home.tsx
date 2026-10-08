import React, { useEffect, useState } from "react";
import api from "../api";
import logo from "../assets/djmm-pro-logo.png";
import SearchBar from "./components/SearchBar";


function Home() {


    return (
        <div className="app-container" >
            <main>
                <h1>My Home Page (Dashboard)</h1>
                <SearchBar options={[]} placeholder="Search By Track Name, Artist, Genrer, Key Or Bpm" />
            </main>
        </div>
    )

}
export default Home

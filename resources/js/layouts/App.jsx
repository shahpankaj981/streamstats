import React from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const App = () => {
    return(
        <BrowserRouter>
            <h3>StreamStats</h3>
            <Routes>
                <Route exact path='/' element={ <Home /> } />
                <Route path='/login' element={ <Login /> } />
                
            </Routes>
        </BrowserRouter>
    );
}

if(document.getElementById('app')) {
    createRoot(document.getElementById('app')).render(<App />)
}
import React from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "./Navbar";
import store from "../store/index";
import { Provider } from 'react-redux';
import Protected from "../routes/Protected";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {login } from '../store/authSlice';

const Callback = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    React.useEffect(() => {
        let token = searchParams.get("token");
        if (token) {
            dispatch(login(token));
            window.location = '/';
        }
    }, []); 
}
const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/callback' element={ <Callback /> } />
                <Route path='/login' element={ <Login /> } />
                <Route
                    path="/"
                    element={
                    <Protected>
                        <Home />
                    </Protected>
                    }
                />
                

            </Routes>
        </BrowserRouter>
    );
}

if(document.getElementById('app')) {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )
}
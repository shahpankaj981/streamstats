import * as React from "react"
import { redirect, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {login, logout } from '../store/authSlice';

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const accessToken = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();
    React.useEffect(() => {
        let token = searchParams.get("token");
        if (token) {
            console.log('token', token)
            dispatch(login(token));
            window.location = '/';
        }
    }, []); 

    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}

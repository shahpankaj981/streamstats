import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { redirect, useSearchParams } from "react-router-dom";

const Protected = ({children}) =>  {
    const authed = useSelector((state) => !!state.auth.token);

    return authed === true ? children : <Navigate to="/login" replace />;
}

export default Protected;
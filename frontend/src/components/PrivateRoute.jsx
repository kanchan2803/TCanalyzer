import React from 'react';
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children })=>{
    const { isLoggedIn } = useAuth();
    if(!isLoggedIn){
        return <Navigate to="/login" />;
    }

    return children; // If logged in, render the component they wanted to access
}

export default PrivateRoute;

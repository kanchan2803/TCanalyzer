import React, { useContext } from 'react'
import { AuthContext } from './authContext'
import { Navigate } from 'react-router-dom';

export default function PrivateContext({ children }) {
    const isLoggedIn = useContext(AuthContext); 

    return isLoggedIn ? children : <Navigate to= "/login"/>
}

import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { BASE_URL } from '../data/env';

function ProtectedRoute({component})  {

    const [tokenVerify, setToken] = useState(true);

    useEffect(() => {
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")
        postHeaders.append("Authorization",localStorage.getItem("token"))

        fetch(`${BASE_URL}/auth/verify`, {
            method: 'GET',
            headers: postHeaders,
        })
        .then(response => {
            if(!response.ok){
                setToken(false)
                throw new Error('Login Failed')
            }
            return response.json()
        })
        .then(data => setToken(true))
        .catch(err => setToken(false))
    },[])

    
        const Component = component;
        // const isAuthenticated = localStorage.getItem('token');
        // const isAuthenticated = true
       
        return tokenVerify ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
}

export default ProtectedRoute;
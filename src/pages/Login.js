import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import { BASE_URL } from "../data/env";

export default function Login() {
    const [email, setEmail] = useState("gokulamudan@gmail.com")
    const [password, setPassword] = useState("HELLOworld$2021")
    const [isAuthenticate, setAuthenticate] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_URL}/auth/token`, requestOptions)
        .then(response => {
            if(!response.ok){
                throw new Error('Login Failed')
            }
            return response.json()
        })
        .then(data => {
            let tok = data.token
            localStorage.setItem("token", tok)
            setAuthenticate(true)
        })
        .catch(err => setAuthenticate(false))
    }

    return isAuthenticate ? <Redirect to="/company" />: (
        <div className="login-outer">
            <div className="login-inner">
                <form onSubmit={submitHandler}>

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
                    </div>


                    <button type="submit" className="btn btn--primary">Sign in</button>

                </form>
            </div>
        </div>
    );
}
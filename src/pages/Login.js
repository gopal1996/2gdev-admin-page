import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="login-outer">
                <div className="login-inner">
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>


                <button type="submit" className="btn btn--primary">Sign in</button>

            </form>
            </div>
         </div>
        );
    }
}
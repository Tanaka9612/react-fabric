import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Register.css';
import Login from "./Login";

class Register extends React.Component{
    render(){
        return(
            <div className="register">
                <h3>Register</h3>
                <form method="POST">
                    <div id="username">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div id="password">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <div id="password">
                        <label>Confirm password</label>
                        <input type="password"/>
                    </div>
                    <div id="login-text">
                        <p id="already-member">Already a member? <Link to={"/login"} element={<Login/>}>Login here</Link></p>
                    </div>
                    <div id="button">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
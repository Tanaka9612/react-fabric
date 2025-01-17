import React from "react";
import "../CSS/login.css";
import { Link } from "react-router-dom";
import Register from "./Register";

class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <h3>Login</h3>
                <form method="POST">
                <div id="username">
                    <label>Email</label> <br/>
                    <input type="text" />
                </div>
                <div id="password">
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div id="register">
                    <p id="register-text" >Not a member? <Link id="register-link" to={"/register"} element={<Register/>}>Register here</Link></p>
                </div>
                <div id="button">
                    <button type="submit">Login</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Login;
import React from "react";
import { Link } from "react-router-dom";
import '../CSS/navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <ul>
                    <li><Link to={"/home"}>Home</Link></li> 
                    {/* <li><Link to={"/about"}>About</Link></li> */}
                    <li><Link to={"/faqs"}>FAQs</Link></li>
                    <li><Link to={"/other"}>Projects</Link></li>
                    <li><Link to={"/team"}>Team</Link></li>
                    <li><Link to={"/app"}>Create Your Card</Link></li>
                    
                </ul>
            </div>
        )
    }
}

export default Navbar;
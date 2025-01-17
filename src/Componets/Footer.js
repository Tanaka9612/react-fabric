import React from "react";
import '../CSS/Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div id="content"></div>
                <div id="copy">
                    &copy; 2025
                </div>
            </div>
        )
    }
}
export default Footer;
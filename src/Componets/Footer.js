import React from "react";
import '../CSS/Footer.css'

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer">
                <div id="content"></div>
                <div id="copy">
                    &copy;
                </div>
            </div>
        )
    }
}
export default Footer;
import React from 'react';
import CLink from "./CLink";

const Footer = (props) =>{
    return (
        <div className="footer">
            <footer>
            <CLink value="About Developer"/>
            <CLink value="Contact Developer"/>
            </footer>
            <span id="dev">
                Developed By MiGiA
            </span>
        </div>
    )
}


export default Footer;
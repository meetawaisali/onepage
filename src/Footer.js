import React from 'react'
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        //<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div className="footer">
        {/* logo */}
            <div className="foot-logo container-fluid">
                <a class="navbar-brand logo" href="#">1$fortheworld</a>  
                <a className="abt"  href="#">Why giving?</a>
                <a className="abt"  href="#">Helpusnow</a>
                <a className="abtt"  href="#">Aboutus</a> 
                <FontAwesomeIcon icon={faInstagram} className="icon1"  />
                <FontAwesomeIcon icon={faWhatsapp} className="icon2"/>                     
            </div>
            
            {/* about us */}
            

           
        </div>
        
    )
}

export default Footer

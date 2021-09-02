import React from "react";
import "./styles.css"

const Footer = (props) => {
    

    return (
        <footer className="footer__container">
            <a href={props.href}>Back to top</a>
        </footer>
    )
}

export default Footer;
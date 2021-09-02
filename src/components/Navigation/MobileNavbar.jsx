import React from "react";
import {
    Link
} from "react-router-dom";
import "./styles.css";

const MobileNavbar = () => {
    return (
        <ul className="navbar--mobile">
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    )
}

export default MobileNavbar;
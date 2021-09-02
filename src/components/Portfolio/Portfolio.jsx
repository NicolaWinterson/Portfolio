import React from "react";
import Navbar from "../Navigation/Navbar"
import Footer from "../Footer/Footer";
import PortfolioItem from "./PortfolioItem"

import "./styles.css";

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <a id="top"></a>
            <Navbar />
            <div className="portfolio__container--center">
                <h2 className="portfolio__heading">Responsive design written in HTML, CSS, React, Javascript and TypeScript</h2>
                <div className="flexparent">
                    <PortfolioItem imgsrc="../Screenshot 2021-08-31 at 12-03-33 ABC Sweden – Active contributions for people and the environment.png" alt="ABC Sweden" link="http://abcsweden.org/" />
                    <PortfolioItem imgsrc="../Screenshot_Calculator_App.png" alt="Calculator App" link="https://eager-jennings-bd5ba1.netlify.app/" />
                    <PortfolioItem imgsrc="../Screenshot_2020-10-21-React-Weather-App.png" alt="Weather app API call" link="https://dmgnc.csb.app/" />
                    <PortfolioItem imgsrc="../Screenshot_2020-10-21-React-Game-App.png" alt="Tic Tac Toe w/ hooks" link="https://xmjpj.csb.app/" />
                    <PortfolioItem imgsrc="../Screenshot_Recipe_API_App.png" alt="Receipt search API call" link="https://recipesearchappreact.netlify.app/" />
                    <PortfolioItem imgsrc="https://image.freepik.com/free-vector/purple-coming-soon-neon-icon-vector_53876-77843.jpg" alt="To do list" link="https://codepen.io/nicolawinterson/pen/xxbZqEq" />
                </div>
            </div>
            <Footer href="#top" />
        </div>
    )
}

export default Portfolio
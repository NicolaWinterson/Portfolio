import React from "react";
import Navbar from "../Navigation/Navbar"
import Footer from "../Footer/Footer";
import socialMediaDatas from "../Contact/SocialMediaData";
import SocialMediaIcons from "../Contact/SocialMediaIcons";
import "./styles.css";

const Home = () => {
    return (
        <div>
            <a id="top"></a>
            <Navbar />
            <div className="home__container">
                <img className="home__container--image" src="../hi.png.png" alt="hi"></img>
                <div className="home__container--aside">
                    <h4>Hi, I'm Nicola</h4>
                    <p>Malmö based freelance software developer, specialising in React and JavaScript</p>
                    <div className="home__container--socialmedia">
                                {socialMediaDatas.map(item => (
                                    <SocialMediaIcons {...item} className="home__social-media-icons" />
                                ))}
                    </div>
                </div>
            </div>
            <h1 className="home_heading">Hej and welcome</h1>
            <Footer href="#top" />
        </div>
    )
}

export default Home
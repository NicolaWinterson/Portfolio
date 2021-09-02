import React from "react";
import socialMediaDatas from "./SocialMediaData";
import SocialMediaIcons from "./SocialMediaIcons";
import Navbar from "../Navigation/Navbar"
import Footer from "../Footer/Footer";

import "./styles.css";

const Contact = () => {

    const sayHowdy = () => {
        alert('Howdy');
    }

    return (
        <div className="contact__container">
            <a id="top"></a>
            <Navbar />
            <div className="contact__container--center">
                <div className="contact__container--centerText">
                    <h1 className="contact__container--heading">Say Hello</h1>
                    <h2>What do you need help with? Have a project or an idea you'd like to collaborate on? Let’s talk about it.</h2>
                </div>
                <div className="contact__container--background">
                    <div className="contact__container--socialmedia">
                        {socialMediaDatas.map(item => (
                            <SocialMediaIcons {...item} className="social-media-icons" />
                        ))}
                    </div>
                    <form className="contact__container--form">
                        <label>Name:</label>
                        <input className="contact__container--formInput" type="text" placeholder="Dirk Gently" />
                        <label>Email:</label>
                        <input className="contact__container--formInput" type="email" placeholder="dirk@holisticdetectiveagency.gov" />
                        <label>Message:</label>
                        <textarea className="contact__container--formInput-large" name="text" rows="2" cols="20" placeholder="“Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.”" ></textarea>
                        <input className="contact__container--submit" type="submit" value="Submit" onClick={sayHowdy} />
                    </form>  
                </div>

            </div>
            <Footer href="#top" />
        </div>
    )
}

export default Contact;
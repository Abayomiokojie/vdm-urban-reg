"use client"

import React, { useState } from "react";
import "./footer.css";
import FooterLogo from "..//../public/logo/VDMLogoFull_II.png"
import Image from "next/image";
// import EmailIcon from "../../assets/Email.svg";
// import LinkedIn from "../../assets/linkedin.svg"; 
// import Instagram from "../../assets/insta.svg";
// import Facebook from "../../assets/facebook.svg";
// import YouTube from "../../assets/Youtube.svg";     
// import Path from "../../assets/Path.svg";


function FooterWrap() {

    // Signup form logic
    const [formState, setFormState] = useState({});

    const changeHandler = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const config = {
            SecureToken: "b568f446-88da-4206-bd27-7dd1b92e1c35",
            To: 'webform@quotekong.com',
            From: 'info@quotekong.com',
            Subject: `Hi, I'm interested in your services, please reach out to me at: ${formState.email}, Thank you!`
        };

        if (window.Email) {
            window.Email.send(config)
                .then(() => {
                    alert("Message sent!");

                    setFormState({});
                })
                .catch((error) => {
                    console.error("Error sending message:", error);
                });
        }
    };


    return (

        <div className="footer-container">
            <div className="footer-wrap">
                {/* Quote Kong info */}
                <div className="quote-kong-info">
                    <Image className="mail-icon" alt="VDM Logo" src={FooterLogo} width={100} height={50} />
                    <div>
                        <address className="email-link">
                            {/* <img alt="email icon" src={EmailIcon} /> */}
                            <a className="quote-kong-email" href="mailto: info@VDMurbanregcompliance.com"> info@VDMurbanregcompliance.com
                            </a>
                        </address>
                    </div>

                    <div className="social">
                        <a href="https://www.linkedin.com/company/quote-kong">
                            {/* <img alt="LinkedIn" src={LinkedIn} /> */}
                        </a>
                        <a href="https://www.facebook.com/quotekong/">
                            {/* <img alt="Facebook" src={Facebook} /> */}
                        </a>
                        <a href="https://www.instagram.com/quotekong/">
                            {/* <img alt="Instagram" src={Instagram} /> */}
                        </a>
                        <a href="https://www.youtube.com/@nathanseiling8335">
                            {/* <img alt="Youtube" src={YouTube} /> */}
                        </a>
                    </div>
                </div>

                {/* Product */}
                <div className="product">
                    <h4>Product</h4>
                    <a href="/#">Features </a>
                    <a href="/pricing"> Pricing </a>
                    <a href="/#">Reviews</a>
                    <a href="/#"> Updates</a>
                </div>

                {/* Company */}
                <div className="company">
                    <h4>Company</h4>
                    <a href="/about">About Us </a>
                    <a href="#our-team"> Our Team </a>
                    <a href="https://quotekong.youcanbook.me/">Book Demo</a>
                    <a href="/contact"> Contact Us</a>
                </div>

                {/* Sign up */}
                <div className="sign-up-footer">
                    <h4 className="signup-title">Contact Us</h4>
                    <p className="signup-text">Get a personalized Demo, use one of your Jobs.</p>

                    <div className="enter-email">
                        <form className="form-wrapper" onSubmit={submitHandler}>

                            <input className="email-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email" autoComplete="on" value={formState.email || ""} onChange={changeHandler} required
                            />
                            <button className="submit" type="submit">

                                {/* <img alt="Submit-email" src={Path} /> */}
                            </button>
                        </form>

                    </div>

                    <p className="signup-text">Enter your email above to request a free demo.</p>
                </div>

            </div>

            <div className="copyright">
                <p className="copyright-text">
                    Copyright © {new Date().getFullYear()} VDM Urban Reg Compliance.
                </p>
                <div className="terms">
                    <a href="/terms">Terms and Conditions</a>
                    <p>|</p>
                    <a href="/terms"> Privacy Policy</a>
                </div>
            </div>

        </div>

    );
}

export default FooterWrap;

import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div id="navbar" className="navbar w-full">
            <div className="navbar-container w-full flex justify-between items-center md:px-20 md:py-5">
                <div className="logo">
                    <img src="/images/socialMedia/svg/Logo.svg" alt="Logo" />
                </div>
                <div className="items flex gap-6">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

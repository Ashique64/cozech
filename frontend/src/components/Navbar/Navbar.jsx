import React, { useState, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector("#home");
            const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > heroHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        if (!isMobile) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const showIcon = isMobile || isScrolled;

    return (
        <>
            <nav id="navbar" className={`navbar w-full ${showIcon ? "navbar-hidden" : ""}`}>
                <div className="navbar-container w-full flex justify-between items-center md:px-20 md:py-5">
                    <div className="logo">
                        <img src="/images/socialMedia/svg/Logo-2.svg" alt="Logo" />
                    </div>
                    <div className="items flex gap-6">
                        <a href="#home">
                            <span>Home</span>
                        </a>
                        <a href="#services">
                            <span>Services</span>
                        </a>
                        <a href="#projects">
                            <span>Projects</span>
                        </a>
                        <a href="#about">
                            <span>About Us</span>
                        </a>
                        <a href="#contact">
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </nav>

            <button
                className={`menu-icon ${showIcon ? "menu-icon-visible" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <div className={`overlay-menu ${isMenuOpen ? "overlay-menu-open" : ""}`}>
                <div className="overlay-content w-full">
                    <div className="overlay-logo">
                        <img src="/images/socialMedia/svg/Logo-2.svg" alt="Logo" />
                    </div>
                    <div className="overlay-items">
                        <a href="#home" onClick={handleLinkClick}>
                            <span>Home</span>
                        </a>
                        <a href="#services" onClick={handleLinkClick}>
                            <span>Services</span>
                        </a>
                        <a href="#projects" onClick={handleLinkClick}>
                            <span>Projects</span>
                        </a>
                        <a href="#about" onClick={handleLinkClick}>
                            <span>About Us</span>
                        </a>
                        <a href="#contact" onClick={handleLinkClick}>
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar/Navbar.scss";

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const gotoSection = (hash) => (e) => {
        e.preventDefault();
        navigate(`/${hash}`, { replace: false });
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 998);
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

    const gotoAndClose = (hash) => (e) => {
        e.preventDefault();
        setIsMenuOpen(false); // close overlay
        navigate(`/${hash}`, { replace: false });
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
                        <a href="/#home" onClick={gotoSection("#home")}>
                            <span>Home</span>
                        </a>
                        <a href="/#services" onClick={gotoSection("#services")}>
                            <span>Services</span>
                        </a>
                        <a href="#projects" onClick={gotoSection("#projects")}>
                            <span>Projects</span>
                        </a>
                        <a href="#about" onClick={gotoSection("#about")}>
                            <span>About Us</span>
                        </a>
                        <a href="#contact" onClick={gotoSection("#contact")}>
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
                        <a href="#/home" onClick={gotoAndClose("#home")}>
                            <span>Home</span>
                        </a>
                        <a href="#/services" onClick={gotoAndClose("#services")}>
                            <span>Services</span>
                        </a>
                        <a href="#/projects" onClick={gotoAndClose("#project")}>
                            <span>Projects</span>
                        </a>
                        <a href="#/about" onClick={gotoAndClose("#about")}>
                            <span>About Us</span>
                        </a>
                        <a href="#/contact" onClick={gotoAndClose("#contact")}>
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar2;

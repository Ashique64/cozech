import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Hero.scss";

const Hero = () => {
    return (
        <section id="home" className="home relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/videos/Hero-bg.webm" type="video/webm" />
                <source src="/videos/Hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50" />
            <div className="gradient-overlay absolute inset-0 pointer-events-none" />
            <div className="container relative z-10 max-w-[1280px] w-full mx-auto px-4 h-full flex items-center justify-center">
                <div className="section-wrapper  w-full h-full pt-36 px-10 flex flex-col items-center justify-center gap-14">
                    <div className="title-section flex flex-col justify-center items-center gap-4 ">
                        <h1 className="main-title">
                            We build <span>Brands</span>
                        </h1>
                        <p>We craft modern, scalable digital products with clarity, transparency, and impact.</p>
                    </div>
                    <div className="cta-section flex flex-col justify-center items-center gap-4">
                        <button>Book a call</button>
                        <Link smooth to="/#process" className=" transition">
                            Too soon? Keep scrolling.
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

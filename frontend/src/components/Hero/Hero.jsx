import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <section id="home" className="home w-full h-screen flex items-center justify-center">
            <div className="content-container md:w-1/2 h-screen flex flex-col justify-center md:ps-20 md:pe-10 gap-16 relative">
                <div className="text-section flex flex-col gap-4 text-start">
                    <h1 className="title">
                        Smart Digital Solutions <span>Built Around You</span>
                    </h1>
                    <p className="hero-para">
                        At Cozech, we turn your ideas into scalable solutions, blending creativity, strategy, and
                        convenience at every step.
                    </p>
                </div>

                <div className="cta-section flex flex-col gap-4">
                    <h6 className="cta-title">Let’s simplify how you go digital</h6>
                    <div className="cta-buttons flex gap-2">
                        <button className="cta-button cta-button-1" type="button">Start a project</button>
                        <button className="cta-button cta-button-2" type="button">Book a call</button>
                    </div>
                </div>

                <div className="abstract-design">
                    <img src="/images/graphy.png" alt="abstract background" />
                </div>
            </div>

            <div className="image-container md:w-1/2 md:pt-24">
                <img src="/images/Hero-Logo.png" alt="" />
            </div>
        </section>
    );
};

export default Hero;

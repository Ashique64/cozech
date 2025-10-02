import React from "react";
import "./CTA.scss";

const CTA = () => {
    return (
        <section id="cta" className="cta w-full min-h-screen flex flex-col items-center justify-center md:p-20">
            <div className="cta-container flex flex-col md:gap-16 justify-center items-center w-full ">
                <img src="/images/CTA/svg/svgImage-1.svg" alt="Icon" className="left absolute top-0 left-0" />
                <img src="/images/CTA/svg/svgImage-2.svg" alt="Icon" className="right absolute top-0 right-0" />
                <div className="title-section w-full flex flex-col md:gap-12 p-4">
                    <div className="text-section flex flex-col gap-4 text-center ">
                        <h2 className="title font-semibold">Let’s Build Something Great Together</h2>
                        <p className="description">Your ideas, our expertise — delivered, maintained, and ready to grow.</p>
                    </div>
                    <div className="button-section flex flex-col items-center gap-4">
                        <p>Let’s simplify how you go digital</p>
                        <div className="buttons flex gap-2">
                            <button type="button" className="btn1">
                                Get Started
                            </button>
                            <button type="button" className="btn2">
                                Book a call
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="image-section">
                    <div className="image-wrapper"><img src="/images/CTA/cta-image.png" alt="cta-image" /></div>
                </div> */}
            </div>
        </section>
    );
};

export default CTA;

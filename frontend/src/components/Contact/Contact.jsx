import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <section id="contact" className="contact w-full min-h-screen flex flex-col items-center justify-center md:p-20">
            <div className="contact-container flex flex-col md:gap-16 justify-center items-center max-w-[1280px] w-full mx-auto px-4">
                <div className="title-section w-full flex flex-col md:gap-5 text-center">
                    <h2 className="title font-semibold">Get in Touch</h2>
                    <p className="description">Drop us a message — we’ll take it from there.</p>
                </div>
                <div className="form-section flex flex-col md:flex-row md:gap-10 w-full">
                    <div className="contact-details">
                        <div className="mail">
                            <div className="heading">Email</div>
                            <div className="details">
                                <div className="content">
                                    <div className="icon">
                                        <img src="/images/socialMedia/svg/Mail.svg" alt="Logo" />
                                    </div>
                                    <div className="text">info@cozech.com</div>
                                </div>
                                <div className="button">
                                    <img src="/images/socialMedia/svg/RightArrow.svg" alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-details"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

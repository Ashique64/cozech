import React from "react";
import "./Contact.scss";

const contactItems = [
    {
        id: 1,
        label: "Email",
        icon: "/images/socialMedia/svg/Mail.svg",
        text: "info@cozech.com",
        link: "mailto:info@cozech.com",
    },
    {
        id: 2,
        label: "Phone",
        icon: "/images/socialMedia/svg/Phone.svg",
        text: "+91 234 567 8901",
        link: "tel:+912345678901",
    },
    {
        id: 3,
        label: "Location",
        icon: "/images/socialMedia/svg/Location.svg",
        text: "123 Cozech St, Kerala, India",
        link: "https://www.google.com/maps?q=123+Cozech+St,+Kerala,+India",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="contact w-full min-h-screen flex flex-col items-center justify-center md:p-20">
            <div className="contact-container flex flex-col md:gap-16 justify-center items-center max-w-[1280px] w-full mx-auto px-4">
                <div className="title-section text-center md:gap-5 flex flex-col">
                    <h2 className="title font-semibold">Get in Touch</h2>
                    <p className="description">Drop us a message — we’ll take it from there.</p>
                </div>

                <div className="form-section flex flex-col md:flex-row md:gap-10 w-full">
                    <div className="contact-details flex flex-col gap-8 w-full md:w-2/5">
                        {contactItems.map(({ id, label, icon, text, link }) => (
                            <div className="contact-item flex flex-col gap-4" key={id}>
                                <div className="heading">{label}</div>
                                <div className="details flex justify-between items-center">
                                    <div className="content flex items-center gap-2">
                                        <img className="icon w-5 h-5" src={icon} alt={label} />
                                        <div className="text">{text}</div>
                                    </div>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="button">
                                        <img src="/images/socialMedia/svg/RightArrow.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="form-details md:w-3/5 flex flex-col gap-6 ">
                        <div className="form-items flex flex-col gap-12 w-full ">
                            <div className="items flex items-center md:gap-12 w-full ">
                                <div className="item flex flex-col gap-2 w-full ">
                                    <div className="label">Name</div>
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                                <div className="item flex flex-col gap-2 w-full">
                                    <div className="label">Email</div>
                                    <input type="email" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="items flex items-center md:gap-12 w-full ">
                                <div className="item flex flex-col gap-2 w-full ">
                                    <div className="label">Phone Number</div>
                                    <input type="text" placeholder="Enter Your Phone Number" />
                                </div>
                                <div className="item flex flex-col gap-2 w-full">
                                    <div className="label">Company / Organization Name</div>
                                    <input type="text" placeholder="Enter Your Organization Name" />
                                </div>
                            </div>
                            <div className="items flex items-center md:gap-12 w-full ">
                                <div className="item flex flex-col gap-2 w-full ">
                                    <div className="label">Message</div>
                                    <textarea name="" id="" placeholder="Enter Your Message Here" rows={5}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="submit-button">
                            <button className="flex items-center gap-2">
                                Send your Inquiry{" "}
                                <span>
                                    <img src="/images/socialMedia/svg/RightArrow.svg" alt="arrow" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

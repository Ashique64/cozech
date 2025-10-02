import React from "react";
import "./About.scss";

const aboutItems = [
    {
        id: 1,
        title: "Transparent Payments",
        description: "Clear, milestone-based payments — pay only for what’s delivered.",
    },
    {
        id: 2,
        title: "No Hidden Fees",
        description: "Honest pricing with zero surprises.",
    },
    {
        id: 3,
        title: "Focused Team",
        description: "A dedicated, nimble team giving extra care and value to every project.",
    },
    {
        id: 4,
        title: "Ongoing Support",
        description: "Long-term maintenance and updates to keep your projects performing.",
    },
];

const About = () => {
    return (
        <section id="about" className="about w-full min-h-screen flex flex-col items-center justify-center md:p-20">
            <div className="about-container flex flex-col md:gap-16 justify-center items-center w-full ">
                <div className="title-section w-full flex flex-col md:gap-5 text-center">
                    <h2 className="title font-semibold">
                        Why Choose <span>COZECH</span>{" "}
                    </h2>
                    <p className="description">Smart solutions. Clear process. Lasting results.</p>
                </div>
                <div className="content-section w-full">
                    <div className="content-wrapper flex flex-col md:gap-20 py-20 ">
                        {aboutItems.map((item, index) => (
                            <div key={item.id} className="item w-full flex items-start gap-10">
                                <h2 className="number font-semibold">{String(index + 1).padStart(3, "0")}</h2>
                                <div className="content w-full flex flex-col gap-7">
                                    <div className="content-title">
                                        <h3 className="font-semibold">{item.title}</h3>
                                    </div>
                                    <div className="content-description">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="shapes h-full flex">
                        <div className="item1 w-[31.2px] h-full"></div>
                        <div className="item2 w-[31.2px] h-full"></div>
                        <div className="item3 w-[31.2px] h-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from "react";
import "./About.scss";

const aboutItems = [
    {
        id: 1,
        title: "Transparent Payments",
    },
    {
        id: 2,
        title: "No Hidden Fees",
    },
    {
        id: 3,
        title: "Focused Team",
    },
    {
        id: 4,
        title: "Ongoing Support",
    },
];

const About = () => {
    return (
        <section id="about" className="about w-full min-h-screen flex flex-col items-center justify-center md:p-20">
            <div className="about-container flex flex-col md:gap-16 justify-center items-center max-w-[1280px] w-full mx-auto px-4">
                <div className="title-section w-full flex flex-col md:gap-5 text-center">
                    <h2 className="title font-semibold">
                        Why Choose <span>COZECH</span>{" "}
                    </h2>
                    <p className="description">Smart solutions. Clear process. Lasting results.</p>
                </div>

                <div className="about-items-section grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full">
                    {aboutItems.map((item, index) => (
                        <div className="item-wrapper" key={item.id}>
                            <div className="item flex items-center md:gap-10">
                                <div className="number">
                                    <h2>{String(index + 1).padStart(2, "0")}</h2>
                                </div>
                                <div className="title">
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

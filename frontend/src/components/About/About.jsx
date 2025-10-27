import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

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
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const itemsRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 50,
                rotateX: -90,
                transformOrigin: "50% 50%",
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transformOrigin: "50% 50%",
                duration: 1,
                ease: "power2.out",
            }
        );

        tl.fromTo(
            descriptionRef.current,
            {
                opacity: 0,
                y: 40,
                rotateX: -90,
                transformOrigin: "50% 50%",
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transformOrigin: "50% 50%",
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.5"
        );

        tl.fromTo(
            itemsRef.current,
            {
                opacity: 0,
                x: -30,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            },
            "-=0.3"
        );

    });

    return (
        <section
            ref={containerRef}
            id="about"
            className="about w-full min-h-screen flex flex-col items-center justify-center md:p-20"
        >
            <div className="about-container flex flex-col md:gap-16 justify-center items-center max-w-[1280px] w-full mx-auto px-4">
                <div className="title-section w-full flex flex-col md:gap-5 text-center">
                    <h2 ref={titleRef} className="title font-semibold" data-text="Why Choose COZECH">
                        Why Choose <span>COZECH</span>{" "}
                    </h2>
                    <p ref={descriptionRef} className="description">
                        Smart solutions. Clear process. Lasting results.
                    </p>
                </div>

                <div className="about-items-section grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full">
                    {aboutItems.map((item, index) => (
                        <div className="item-wrapper" key={item.id} ref={(el) => (itemsRef.current[index] = el)}>
                            <div className="item flex items-center md:gap-10">
                                <div className="number">
                                    <h2 data-text={String(index + 1).padStart(2, "0")}>
                                        {String(index + 1).padStart(2, "0")}
                                    </h2>
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

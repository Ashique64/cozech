import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CTA.scss";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef([]);
    const bottomImageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 10%",
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
                ease: "power3.out",
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
            buttonsRef.current,
            {
                opacity: 0,
                y: 20,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)",
            },
            "-=0.3"
        );

        tl.fromTo(
            bottomImageRef.current,
            {
                opacity: 0,
                y: 40,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
            },
            "-=0.4"
        );
    });

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const openWhatsApp = () => {
        const phoneNumber = "918593978298";
        const message = "Hi! I'd like to book a call.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            ref={sectionRef}
            id="cta"
            className="cta w-full lg:min-h-screen flex flex-col items-center justify-center md:px-20 py-10 md:py-20"
        >
            <div className="cta-container flex flex-col md:gap-6 justify-center items-center max-w-[1280px] w-full mx-auto px-3 ">
                <img src="/images/CTA/svg/svgImage-1.svg" alt="Icon" className="left absolute top-0 left-0" />
                <img src="/images/CTA/svg/svgImage-2.svg" alt="Icon" className="right absolute top-0 right-0" />
                <div className="title-section w-full flex flex-col gap-8 md:gap-12 p-4">
                    <div className="text-section flex flex-col gap-2 md:gap-4 text-center ">
                        <h2 ref={titleRef} className="title font-semibold" data-text="Ready to Create What’s Next?">
                            Ready to Create What’s Next?
                        </h2>
                        <p ref={descriptionRef} className="description">
                            Your ideas, our expertise — delivered, maintained, and ready to grow.
                        </p>
                    </div>
                    <div className="button-section flex flex-col items-center gap-4">
                        <div className="buttons flex gap-4">
                            <button
                                ref={(el) => (buttonsRef.current[0] = el)}
                                type="button"
                                onClick={scrollToContact}
                                className="btn1"
                            >
                                <span>Get Started</span>
                            </button>
                            <button
                                ref={(el) => (buttonsRef.current[1] = el)}
                                type="button"
                                onClick={openWhatsApp}
                                className="btn2"
                            >
                                <span>Book a Call</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="image-section w-full">
                    <img
                        src="/images/CTA/cta-image.webp"
                        alt="Decorative"
                        ref={bottomImageRef}
                        className="cta-bottom-image"
                    />
                    <div className="bars flex"></div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

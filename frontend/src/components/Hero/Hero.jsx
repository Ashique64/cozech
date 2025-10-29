import React, { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import "./Hero.scss";

gsap.registerPlugin(SplitText);

const Hero = () => {
    const rotatingWords = ["Solutions", "Websites", "Apps", "Designs", "Brands"];

    const rotatingRef = useRef(null);
    const containerRef = useRef(null);
    const tlRef = useRef(null);
    const mainTitleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);

    useGSAP(() => {
        const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (mainTitleRef.current) {
            const mainSplit = new SplitText(mainTitleRef.current, {
                type: "chars, words",
                charsClass: "char",
                wordsClass: "word",
            });

            gsap.set(mainSplit.chars, {
                opacity: 0,
                y: -100,
                rotateX: 90,
                transformOrigin: "50% 50%",
            });

            masterTl.to(
                mainSplit.chars,
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 1.2,
                    stagger: 0.03,
                    ease: "back.out(1.2)",
                },
                0.3
            );
        }

        const wordEl = rotatingRef.current;
        if (!wordEl) return;

        gsap.set(wordEl, { y: 30, opacity: 0, autoAlpha: 0, rotateX: 90 });
        wordEl.textContent = rotatingWords[0];

        masterTl.to(
            wordEl,
            {
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                rotateX: 0,
                duration: 1.2,
                ease: "back.out(1.2)",
            },
            0.5
        );

        if (descRef.current) {
            gsap.set(descRef.current, { opacity: 0, y: 18 });
            masterTl.to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, ">-=0.2");
        }

        if (ctaRef.current) {
            const button = ctaRef.current.querySelector("button");
            const linkElement = ctaRef.current.querySelector("a");

            if (linkElement) {
                linkElement.style.transition = "none";
                linkElement.classList.remove("transition");
            }

            if (button) gsap.set(button, { opacity: 0, y: 20, force3D: true });
            if (linkElement) gsap.set(linkElement, { opacity: 0, y: 20, force3D: true });

            masterTl.to(
                button,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    force3D: true,
                },
                ">"
            );

            masterTl.to(
                linkElement,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    force3D: true,
                    onComplete: () => {
                        if (linkElement) {
                            linkElement.style.transition = "";
                            linkElement.classList.add("transition");
                        }
                    },
                },
                ">"
            );
        }

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5, defaults: { ease: "power2.inOut" } });
        let idx = 0;

        const animateSwap = () => {
            const nextIdx = (idx + 1) % rotatingWords.length;

            tl.to(wordEl, { duration: 0.8, y: -40, opacity: 0, autoAlpha: 0 }, "+=3");
            tl.add(() => {
                wordEl.textContent = rotatingWords[nextIdx];
                gsap.set(wordEl, { y: 40, opacity: 0, autoAlpha: 0 });
            });
            tl.to(wordEl, { duration: 0.8, y: 0, opacity: 1, autoAlpha: 1 }, "-=0.1");

            idx = nextIdx;
        };

        for (let i = 0; i < rotatingWords.length; i++) {
            animateSwap();
        }

        tlRef.current = tl;

        return () => {
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }
            masterTl.kill();
        };
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "918593978298";
        const message = "Hi! I'd like to book a call.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="home" className="home relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/hero-poster.png"
            >
                <source src="/videos/Hero-bg.webm" type="video/webm" />
                <source src="/videos/Hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black/50" />
            <div className="gradient-overlay absolute inset-0 pointer-events-none" />

            <div
                ref={containerRef}
                className="container relative z-10 max-w-[1280px] w-full mx-auto px-4 h-full flex items-center justify-center"
            >
                <div className="section-wrapper w-full h-full md:pt-36 px-2 flex flex-col items-center justify-center gap-10 md:gap-14">
                    <div className="title-section flex flex-col justify-center items-center gap-4 w-full">
                        <h1 ref={mainTitleRef} className="main-title">
                            We build
                        </h1>
                        <h1 ref={rotatingRef} className="rotating-word" aria-live="polite" />

                        <p ref={descRef}>
                            <span className="hidden md:block full-desc">
                                We craft seamless, high-performing digital experiences that elevate brands and drive
                                meaningful engagement. Book a free consultation to discover how we can accelerate your
                                digital growth.
                            </span>
                            <span className="block md:hidden short-desc">
                                High-performing digital experiences that elevate your brand. Book a free consultation today.
                            </span>
                        </p>
                    </div>

                    <div ref={ctaRef} className="cta-section flex flex-col justify-center items-center gap-4">
                        <button onClick={handleWhatsAppClick}>
                            <span>Book a Call</span>
                        </button>
                        <Link smooth to="/#process" className="transition">
                            Too soon? <span>Keep scrolling</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

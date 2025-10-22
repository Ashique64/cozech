import React, { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.scss";

const Hero = () => {
    const rotatingWords = ["Brands", "Products", "Experiences", "Interfaces", "Platforms"];

    const wordsRef = useRef([]);
    const tlRef = useRef(null);
    const containerRef = useRef(null);

    const setWordRef = (el, i) => {
        if (el) wordsRef.current[i] = el;
    };

    const handleMouseEnter = () => {
        tlRef.current?.pause();
    };

    const handleMouseLeave = () => {
        tlRef.current?.play();
    };

    useGSAP(
        () => {
            const words = wordsRef.current.filter(Boolean);
            if (!words.length) return;

            // Initial states: hide all words except first
            gsap.set(words, { y: 30, opacity: 0, autoAlpha: 0 }); // Start below
            gsap.set(words[0], { y: 0, opacity: 1, autoAlpha: 1 }); // First word in position

            // Create infinite timeline
            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.8,
                defaults: { ease: "power2.inOut" },
            });

            // Build animation sequence for each word
            for (let i = 0; i < words.length; i++) {
                const current = words[i];
                const next = words[(i + 1) % words.length];

                // Hold current word (visible and in position)
                tl.to(current, { duration: 0.6, y: 0, opacity: 1 }, "+=1.2");

                // Slide current word UP and fade out
                tl.to(current, { 
                    duration: 0.5, 
                    y: -30,           // Move UP (negative value)
                    opacity: 0, 
                    autoAlpha: 0 
                });

                // Position next word BELOW
                tl.set(next, { y: 30, opacity: 0, autoAlpha: 0 }); // Start from below (positive value)
                
                // Slide next word UP into view (from below to center)
                tl.to(next, { 
                    duration: 0.5, 
                    y: 0,             // Move to center
                    opacity: 1, 
                    autoAlpha: 1 
                }, "-=0.3"); // Overlap for smooth transition
            }

            tlRef.current = tl;
        },
        { scope: containerRef }
    );

    return (
        <section 
            id="home" 
            className="home relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
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
                <div className="section-wrapper w-full h-full pt-36 px-10 flex flex-col items-center justify-center gap-14">
                    <div className="title-section flex flex-col justify-center items-center gap-4">
                        <h1 className="main-title">
                            We build
                            {/* ✅ NEW LINE: Rotating words on separate line */}
                            <span className="rotating-words-wrapper">
                                {rotatingWords.map((word, i) => (
                                    <span
                                        key={word}
                                        ref={(el) => setWordRef(el, i)}
                                        className="rotating-word"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </span>
                        </h1>
                        <p>We craft modern, scalable digital products with clarity, transparency, and impact.</p>
                    </div>
                    
                    <div className="cta-section flex flex-col justify-center items-center gap-4">
                        <button>Book a Call</button>
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
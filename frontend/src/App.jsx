import React, { Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const Hero = React.lazy(() => import("./components/Hero/Hero"));
const Process = React.lazy(() => import("./components/Process/Process"));
const Services = React.lazy(() => import("./components/Services/Services"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const About = React.lazy(() => import("./components/About/About"));
const CTA = React.lazy(() => import("./components/CTA/CTA"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function Loader() {
    return (
        <div className="loader-overlay">
            <div className="loader-content">
                <div className="loader-spinner"></div>
                <p className="loader-text">Loading...</p>
            </div>
        </div>
    );
}

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        // Wait for content to be mounted and painted
        if (contentLoaded) {
            // Small delay to ensure layout is stable
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [contentLoaded]);

    return (
        <>
            {isLoading && <Loader />}
            <div className={isLoading ? "content-hidden" : "content-visible"}>
                <Suspense fallback={null}>
                    <Navbar />
                    <Hero />
                    <Process />
                    <Services />
                    <Projects />
                    <About />
                    <CTA />
                    <Contact />
                    <Footer />
                    <ContentLoadedSignal onLoad={() => setContentLoaded(true)} />
                </Suspense>
            </div>
        </>
    );
}

function ContentLoadedSignal({ onLoad }) {
    useEffect(() => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                onLoad();
            });
        });
    }, [onLoad]);
    return null;
}

export default App;
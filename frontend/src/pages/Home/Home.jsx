import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import BotpressChatbot from "../../components/BotpressChatbot/BotpressChatbot";

const Hero = React.lazy(() => import("../../components/Hero/Hero"));
const Process = React.lazy(() => import("../../components/Process/Process"));
const Services = React.lazy(() => import("../../components/Services/Services"));
const Projects = React.lazy(() => import("../../components/Projects/Projects"));
const About = React.lazy(() => import("../../components/About/About"));
const CTA = React.lazy(() => import("../../components/CTA/CTA"));
const Contact = React.lazy(() => import("../../components/Contact/Contact"));
const Footer = React.lazy(() => import("../../components/Footer/Footer"));

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 50);
            }
        }
    }, [location]);
    return (
        <>
            <Navbar />
            <Hero />
            <Process />
            <Services />
            <Projects />
            <About />
            <CTA />
            <Contact />
            <Footer />
            <WhatsAppButton />
            <BotpressChatbot />
        </>
    );
}

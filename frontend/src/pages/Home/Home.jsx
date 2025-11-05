import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import BotpressChatbot from "../../components/BotpressChatbot/BotpressChatbot";
import {useDocumentMeta} from "../../hooks/useDocumentMeta";


const Process = React.lazy(() => import("../../components/Process/Process"));
const Services = React.lazy(() => import("../../components/Services/Services"));
const Projects = React.lazy(() => import("../../components/Projects/Projects"));
const About = React.lazy(() => import("../../components/About/About"));
const CTA = React.lazy(() => import("../../components/CTA/CTA"));
const Contact = React.lazy(() => import("../../components/Contact/Contact"));
const Footer = React.lazy(() => import("../../components/Footer/Footer"));

export default function Home() {
    const location = useLocation();

    useDocumentMeta({
        title: "COZECH - Professional Web & Mobile App Development",
        description:
            "Transform your digital presence with COZECH. Professional web and mobile app development, modern UI/UX design, and scalable full-stack solutions for your business.",
        keywords: "web development, mobile app development, UI/UX design, full-stack development, COZECH",
        ogTitle: "COZECH - Professional Web & Mobile App Development",
        ogDescription: "Transform your digital presence with COZECH. Professional web and mobile app development.",
        ogImage: "	https://www.cozech.com/images/socialMedia/svg/Logo-2.svg",
        canonical: "https://cozech.com/",
    });

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
            <Hero/>
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

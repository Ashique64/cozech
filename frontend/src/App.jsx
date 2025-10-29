import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader";
import "./App.css";

const Hero = React.lazy(() => import("./components/Hero/Hero"));
const Process = React.lazy(() => import("./components/Process/Process"));
const Services = React.lazy(() => import("./components/Services/Services"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const About = React.lazy(() => import("./components/About/About"));
const CTA = React.lazy(() => import("./components/CTA/CTA"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));


function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Navbar />
            <Hero />
            <Process />
            <Services />
            <Projects />
            <About />
            <CTA />
            <Contact />
            <Footer />
        </Suspense>
    );
}

export default App;

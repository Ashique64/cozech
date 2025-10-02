import React, { Suspense } from "react";
import "./App.css";

const Hero = React.lazy(() => import("./components/Hero/Hero"));
const Process = React.lazy(() => import("./components/Process/Process"));
const Services = React.lazy(() => import("./components/Services/Services"));
const About = React.lazy(() => import("./components/About/About"));

function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-white-700 border-t-[#666666] rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Loading...</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Hero />
            <Process />
            <Services />
            <About />
        </Suspense>
    );
}

export default App;

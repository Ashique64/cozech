// src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home";
import PricingPolicy from "./pages/PricingPolicy/PricingPolicy";

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing-policy" element={<PricingPolicy />} />
            </Routes>
        </Suspense>
    );
}

export default App;

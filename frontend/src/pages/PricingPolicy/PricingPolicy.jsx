import React from "react";
import "./PricingPolicy.scss";
import Footer from "../../components/Footer/Footer";
import Navbar2 from "../../components/Navbar2";

const webMilestones = [
    { id: 1, title: "Project Setup & Discovery", percent: "20%", trigger: "Advance (contract signing)" },
    { id: 2, title: "Design & Wireframes", percent: "20%", trigger: "Upon client satisfaction" },
    { id: 3, title: "Development Phase 1", percent: "20%", trigger: "Upon client satisfaction" },
    { id: 4, title: "Development Phase 2", percent: "20%", trigger: "Upon client satisfaction" },
    { id: 5, title: "Testing, Launch & Final Delivery", percent: "20%", trigger: "Upon client satisfaction" },
];

const mobileMilestones = [
    { id: 1, title: "Project Initiation & Planning", percent: "20%", trigger: "Advance (contract signing)" },
    { id: 2, title: "UI/UX Design", percent: "15%", trigger: "Upon client satisfaction" },
    { id: 3, title: "Core Features Development", percent: "20%", trigger: "Upon client satisfaction" },
    { id: 4, title: "Secondary Features Implementation", percent: "15%", trigger: "Upon client satisfaction" },
    { id: 5, title: "Testing & Quality Assurance", percent: "15%", trigger: "Upon client satisfaction" },
    { id: 6, title: "App Store Launch & Final Delivery", percent: "15%", trigger: "Upon client satisfaction" },
];

export default function PricingPolicy() {
    return (
        <>
            <Navbar2 />
            <section className="pricing-policy min-h-screen flex items-start justify-center p-8 pt-14 sm:pt-24 lg:pt-40">
                <div className="max-w-4xl w-full">
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-semibold heading">Pricing Policy</h1>
                        <p className="mt-2 subheading">
                            Clear, transparent, milestone-based pricing — fixed project costs and client-first approval for
                            payments.
                        </p>
                    </header>

                    <article className="policy-card p-6 md:p-8 rounded-lg shadow-sm">
                        <section className="mb-6">
                            <h2 className="text-xl font-medium section-title capitalize">Policy statement</h2>
                            <p className="mt-2 description">
                                At Cozéch, our goal is to provide clear, transparent, and client-first pricing that ensures
                                peace of mind. We eliminate uncertainty by offering fixed project costs and milestone-based
                                satisfaction payments, so clients only pay once they are fully satisfied with the
                                deliverables.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-medium section-title capitalize">Core pricing principles</h2>
                            <ul className="mt-3 description list-inside list-disc space-y-2">
                                <li>
                                    <strong>Milestone-Based Satisfaction Payments:</strong> Initial advance 20% and
                                    remaining distributed across milestones. Payments requested only after client approval.
                                </li>
                                <li>
                                    <strong>Project-Based Pricing Model:</strong> Fixed quotations, no hourly billing, no
                                    hidden fees.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-medium section-title capitalize">
                                Web development projects (5 milestones)
                            </h2>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {webMilestones.map((m) => (
                                    <div key={m.id} className="milestone p-4 rounded-md">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium milestone-title">{m.title}</div>
                                            <div className="text-sm font-semibold milestone-percent">{m.percent}</div>
                                        </div>
                                        <div className="text-xs mt-1 milestone-trigger">{m.trigger}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-medium section-title capitalize">
                                Mobile app development projects (6 milestones)
                            </h2>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {mobileMilestones.map((m) => (
                                    <div key={m.id} className="milestone p-4 rounded-md">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium milestone-title">{m.title}</div>
                                            <div className="text-sm font-semibold milestone-percent">{m.percent}</div>
                                        </div>
                                        <div className="text-xs mt-1 milestone-trigger">{m.trigger}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-medium section-title capitalize">Change requests & add-ons</h2>
                            <p className="mt-2 description">
                                Any work beyond the agreed project scope will be discussed, quoted, and approved before
                                implementation.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-medium section-title capitalize">Post-project support</h2>
                            <p className="mt-2 description">
                                We offer optional maintenance plans (monthly or annual) covering updates, security patches,
                                and minor feature enhancements.
                            </p>
                        </section>

                        <footer className="mt-6">
                            <h2 className="text-xl font-medium section-title capitalize">Our Commitment</h2>
                            <p className="description text-sm">
                                Cozéch is built on trust and transparency. Our pricing ensures fairness, cost certainty, and
                                client satisfaction at every step of the journey.
                            </p>
                        </footer>
                    </article>
                </div>
            </section>
            <Footer />
        </>
    );
}

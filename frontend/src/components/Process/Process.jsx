import React from "react";
import "./Process.scss";

const processData = [
    {
        id: 1,
        title: "PLAN",
        description: "We define goals, scope, and strategy upfront.",
        icon: "/images/card-1.png",
        hasAbstractDesign: true,
    },
    {
        id: 2,
        title: "BUILD",
        description: "Design and development happen in tracked, manageable stages.",
        icon: "/images/card-2.png",
        hasAbstractDesign: true,
    },
    {
        id: 3,
        title: "DELIVER",
        description: "Launch with confidence — polished, tested, and ready to go.",
        icon: "/images/card-3.png",
        hasAbstractDesign: true,
    },
    {
        id: 4,
        title: "SUPPORT",
        description: "Ongoing maintenance and updates even after launch, so your digital solution keeps performing.",
        icon: "/images/card-4.png",
        hasAbstractDesign: true,
    },
];

const Process = () => {
    return (
        <section id="process" className="process w-full min-h-screen flex items-center justify-center md:px-20 md:py-20">
            <div className="process-container flex flex-col gap-10 justify-center items-center w-full">
                <div className="title-section text-center">
                    <h2>
                        Plan. Execute. <span>Achieve.</span>
                    </h2>
                    <p className="description">
                        A milestone-driven approach that keeps your projects transparent, organized, and stress-free from
                        start to finish.
                    </p>
                </div>

                <div className="card-section flex justify-center items-stretch gap-10 flex-wrap w-full">
                    {processData.map((item) => (
                        <div key={item.id} className="card-wrapper">
                            {item.hasAbstractDesign && (
                                <div className="abstract-design">
                                    <img src="/images/card-layer.png" alt="" />
                                </div>
                            )}
                            <div className="card flex flex-col justify-center gap-4">
                                <div className="item-1 flex justify-center items-center">
                                    <div className="logo">
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                </div>
                                <div className="item-2 md:text-start flex flex-col justify-center items-start gap-5">
                                    <h3 className="semibold">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button-section">
                    <button>
                        view our pricing policy
                        <span>
                            <i>
                                <svg
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0.333374 5.9999C0.333374 5.42 0.790044 4.9499 1.35337 4.9499H10.3809L7.4464 2.20678C7.04034 1.80484 7.02767 1.14015 7.41812 0.722139C7.80857 0.304129 8.45428 0.291096 8.86034 0.693029L13.6203 5.24303C13.8203 5.44099 13.9334 5.71428 13.9334 5.9999C13.9334 6.28552 13.8203 6.55881 13.6203 6.75678L8.86034 11.3068C8.45428 11.7087 7.80857 11.6957 7.41812 11.2777C7.02767 10.8597 7.04034 10.195 7.4464 9.79303L10.3809 7.0499H1.35337C0.790044 7.0499 0.333374 6.5798 0.333374 5.9999Z"
                                        fill="white"
                                    />
                                </svg>
                            </i>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Process;

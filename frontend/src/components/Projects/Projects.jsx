import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Projects.scss";

const Projects = () => {
    const projectsItems = [
        {
            id: 1,
            title: "The Full-Service Fitness Hub",
            description:
                "A visually compelling, responsive website built to showcase a diverse range of programs—from Personal Training and Body Building to Ladies-Only hours.",
            imageUrl: "/images/projects/project-1.png",
        },
        {
            id: 2,
            title: "Expert German Education Counseling",
            description:
                "Developed a robust informational website detailing the end-to-end support for studying in Germany, showcasing services from Course Selection and Visa Processing to Settlement Support.",
            imageUrl: "/images/projects/project-2.png",
        },
        {
            id: 3,
            title: "Modern E-commerce Showcase",
            description:
                "A clean, responsive website featuring a detailed product grid, clear price/review display, and essential trust elements like warranty and shipping for consumer confidence.",
            imageUrl: "/images/projects/project-3.png",
        },
        {
            id: 4,
            title: "The Trusted Traveler's Choice",
            description:
                "A user-friendly digital presence reflecting the brand's commitment to spotless accommodations and warm service, designed to be the definitive booking source for travelers.",
            imageUrl: "/images/projects/project-4.png",
        },
    ];
    return (
        <section id="projects" className="projects w-full min-h-screen flex flex-col items-center justify-center md:p-20">
            <div className="projects-container flex flex-col gap-20 justify-center items-center max-w-[1280px] w-full mx-auto px-4">
                <div className="title-section flex flex-col md:gap-4 text-center">
                    <h2 className="title font-semibold">
                        Crafted with <span>Purpose</span>
                    </h2>
                    <p className="description">A glimpse into the digital experiences we’ve designed and built.</p>
                </div>

                <div className="projects-item-section grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full">
                    {projectsItems.map((item, index) => (
                    <div className="card-wrapper " key={index}>
                        <div className="card overflow-hidden flex flex-col justify-between items-center md:gap-10">
                            <div className="image">
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="content flex flex-col items-start gap-5 w-full">
                                <h3 className="title">{item.title}</h3>
                                <p className="description">
                                    {item.description}
                                </p>
                            </div>

                            <Link className="button w-full flex justify-start">
                                <button>view project</button>
                            </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

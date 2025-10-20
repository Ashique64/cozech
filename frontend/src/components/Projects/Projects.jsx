import React from "react";
import "./Projects.scss";

const Projects = () => {
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
                    <div className="card-wrapper ">
                        {/* <div className="overlay"></div> */}
                        <div className="card overflow-hidden flex flex-col justify-between items-center md:gap-10">
                            <div className="image">
                                <img src="/images/projects/project-1.png" alt="" />
                            </div>
                            <div className="content flex flex-col items-start gap-5 w-full">
                                <h3 className="title">The Full-Service Fitness Hub</h3>
                                <p className="description">A visually compelling, responsive website built to showcase a diverse range of programs—from Personal Training and Body Building to Ladies-Only hours.</p>
                            </div>

                            <div className="button w-full flex justify-start">
                                <button>view project</button>
                            </div>
                        </div>
                    </div>

                    {/* ----------- */}
                    <div className="card-wrapper">
                        <div className="card">
                            {/* <div className="overlay"></div> */}
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content">
                                <h3 className="title">Project 1</h3>
                                <p className="description">Description of Project 1</p>
                            </div>

                            <div className="button">
                                <button>view project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React, { useState } from 'react';
import "./Portfolio.css"
// ---- Data ---- 
import projects from "../../data/projects.json"

// ---- 
import Wave from "./Wave/Wave"
import Project from "./Project/Project"
const Portfolio = () => {


    let number = 160;
    let i;
    let theArray = [];
    for (i = 1; i < number; i++) {
        theArray.push(i)
    }

    const [waves, setWaves] = useState(theArray)









    return (<div className="portfolio-container">

        <div className="jumbotron-container">
            <div className="waves-container">
                {waves.map((wave) => <Wave sequence={wave} />)}
            </div>

            <div className="jumbotron-view-container">
                <div className="name-container">
                    Justin Kessler
            </div>
                <div className="sub-text-container">
                    Welcome to my Development Porfolio.
            </div>
                <div className="buttons-container">
                    <button className="jumbotron-button project-button"><span className="button-wipe-projects"></span><i class="fas fa-atlas"></i>View Projects</button>
                    <button className="jumbotron-button github-button"><span className="button-wipe-github"></span> <i class="fab fa-github"></i>My Github</button>
                    <button className="jumbotron-button contact-button"><span className="button-wipe-contact"></span><i class="far fa-envelope"></i>Contact Me</button>
                </div>
            </div>
        </div>

        <div className="projects-wrapper">
            {projects.projects.map((project) => <Project data={project} />)}



        </div>
    </div>);
}

export default Portfolio;
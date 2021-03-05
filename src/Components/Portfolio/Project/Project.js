import React from 'react';
import "./Project.css"
import background from "../../../images/test.png"
import TechnologyTag from "./TechnologyTag/TechnologyTag"

const Project = (props) => {

    //let background = `"` + props.data.projectImage + `"`

    let imageStyle = {
        backgroundImage: `url(${background})`
    }

    console.log()

    return (<div className="project-container">

        <div className="project-wrapper">
            <div className="left-side">
                <div className="project-title">

                    {props.data.projectTitle}
                </div>

                <div className="project-image" style={imageStyle}>

                </div>

                <div className="project-buttons">
                    <button className="projects-button"><i class="fas fa-external-link-alt"></i>View Project</button>
                    <button className="projects-button"><i class="fab fa-github"></i>Github</button>
                </div>
            </div>

            <div className="right-side">
                <div className="technologies-title">Technologies: </div>
                <div className="technologies-container">
                    {props.data.technologies.map((tech) => <TechnologyTag text={tech} />)}
                </div>
                <div className="project-description">
                    {props.data.description}
                </div>
            </div>
        </div>

    </div>);
}

export default Project;
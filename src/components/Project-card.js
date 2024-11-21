import React from "react";


const ProjectCard=(props)=>{
    return(
        <div className="project-card">
      <img className="project-image" src={props.image} alt={props.title} />
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <h4 className="project-technologies">{props.technologies}</h4>
      <div className="project-buttons">
        <button className="project-btn demo-btn"><a href="https://example.com/demo" className="project-btn demo-btn">Demo</a></button>
        <button className="project-btn source-btn"><a href="https://example.com/source" className="project-btn source-btn">Source</a></button>
      </div>
    </div>
    )
}

export default ProjectCard
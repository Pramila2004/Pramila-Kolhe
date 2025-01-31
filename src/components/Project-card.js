import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {


  return (
    <div className="project-card">
      <img className="project-image" src={props.image} alt={props.title} />
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <h4 className="project-technologies">{props.technologies}</h4>
      <div className="project-buttons">
        <button className="project-btn demo-btn">
          Info
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

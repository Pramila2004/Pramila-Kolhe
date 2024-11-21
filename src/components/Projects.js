import React from "react";
import ProjectCard from'./Project-card'

const Projects=()=>{
    return(
        <div className="project-container projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width:'100%'}}>
                
                <ProjectCard title=" Backed Artifacts Cake shop website" description="A real-time chat application enabling instant and secure communication across networks." technologies="HTML, CSS, JS ,Django" image="images-copy/baked-artifact.png"/>
                <ProjectCard title="Crop recommendation system using Machine Learning" description="An interactive dashboard for managing e-commerce operations, including inventory, orders, and customer data analytics." technologies="HTML, CSS, Python, Pandas, NumPy, Matplotlib, flask" image="images-copy/ml-project.png"/>
                

            </div>
        </div>
    )
}

export default Projects
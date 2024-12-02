import React from "react";
import ProjectCard from'./Project-card'

const Projects=()=>{
    return(
        <div className="project-container projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width:'100%'}}>
                
                <ProjectCard title=" Backed Artifacts Cake shop website" description="Developed an e-commerce website for a cake shop using Django, enabling online ordering and product
management." technologies="HTML, CSS, JS ,Django" image="images-copy/baked-artifact.png"/>
                <ProjectCard title="Crop recommendation system using Machine Learning" description="Built a crop recommendation system using Machine Learning to suggest optimal crops based on environmental
and soil data for improved agricultural yields." technologies="HTML, CSS, Python, Pandas, NumPy, Matplotlib, flask" image="images-copy/ml-project.png"/>
                

            </div>
        </div>
    )
}

export default Projects
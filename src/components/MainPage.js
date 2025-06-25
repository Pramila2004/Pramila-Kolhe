import React from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const MainPage = () => {
  return (
    <>
    <div className="main-page ">
      <div className="content-container">

        

        {/* Left Side Content */}
        <div className="text-content">
          <div className="subtitle">Web Developer</div>
          <div className="main-heading">
            <h1>Hello, I'm Pramila Kolhe</h1>
          </div>
          <div className="description">
            <p>
            A passionate developer skilled in frontend development, 
            building robust backend systems, and Problem Solving with innovative solutions. 
            <b> Developer who turns ideas into reality with code.</b>
            
            </p>
          </div>
          <div className="download-cv">
            <a href="pdfs\resume_pramila_kolhe.pdf" download="Pramila_Kolhe.pdf" className="cv-button">
              Download Resume
            </a>
          </div>
          <div className="social-media-icons">
            <a href="https://github.com/Pramila2004" target="_blank"><img src="images-copy/github_logo.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/pramila-kolhe-91740228a/" target="_blank"><img src="images-copy/linkedin.webp" alt="" /></a>
            <a href="https://leetcode.com/u/Pramila_Kolhe04/" target="_blank"><img src="images-copy/LeetCode_logo.png" alt="" /></a>
            <a href="https://www.geeksforgeeks.org/user/nkolhepzpdd/" target="_blank"><img src="images-copy/GFG_Logo.png" alt="" /></a>
            <a href="https://www.naukri.com/code360/profile/PramilaKolhe04" target="_blank"><img src="images-copy/ninja_logo.png" alt="" /></a>
          </div>
        </div>
        {/* Right Side Profile Photo */}
        <div className="photo-container">
          <img
            src="images-copy/profile.png"
            alt="Pramila's Photo"
            className="profile-photo"
          />
        </div>
        
      </div>
      
    </div>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
};

export default MainPage;

import React from "react";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content-container">

        

        {/* Left Side Content */}
        <div className="text-content">
          <div className="subtitle">Software Developer</div>
          <div className="main-heading">
            <h1>Hello, I'm Pramila Kolhe</h1>
          </div>
          <div className="description">
            <p>
              Highly motivated and diligent BE pursuing student seeking an
              entry-level position in Computer Science. Committed to applying
              theoretical knowledge and practical skills acquired during my
              diploma and engineering program to contribute to the success of
              an organization. Eager to learn and grow professionally while
              making a positive impact.
            </p>
          </div>
          <div className="download-cv">
            <a href="pdfs/CV.pdf" download="Pramila_Kolhe_CV.pdf" className="cv-button">
              Download Resume
            </a>
          </div>
        </div>
        {/* Right Side Profile Photo */}
        <div className="photo-container">
          <img
            src="images-copy/profile.jpg"
            alt="Pramila's Photo"
            className="profile-photo"
          />
        </div>

        
      </div>
    </div>
  );
};

export default MainPage;

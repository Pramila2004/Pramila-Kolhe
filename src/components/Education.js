import React from "react";


const Education = (props) => {
  return (
    <div className="education-section education">
      <h1 className="education-title"> Education </h1>
      <div className="education-timeline">
      <div className="education-item">
          <div className="education-marker"></div>
          <div className="education-card">
            <h2 className="education-heading">Computer Engineering</h2>
            <p className="education-info">
              <strong>Institute:</strong> Dr. D. Y. Patil Pratishthan's D.Y.
              Patil College of Engineering, Akurdi, Pune (2023-2026)
            </p>
            <p className="education-info">
              <strong>Result:</strong> SE = 9.39
            </p>
          </div>
        </div>

        
        <div className="education-item">
          <div className="education-marker"></div>
          <div className="education-card">
            <h2 className="education-heading">Diploma</h2>
            <p className="education-info">
              <strong>Institute:</strong> Government Polytechnic, Pune
              (2020-2023)
            </p>
            <p className="education-info">
              <strong>Result:</strong> 91%
            </p>
          </div>
        </div>
        <div className="education-item">
          <div className="education-marker"></div>
          <div className="education-card">
            <h2 className="education-heading">SSC</h2>
            <p className="education-info">
              <strong>School:</strong> Chimbhale Madhyamic Vidyalay Chimbhale
              (2019-2020)
            </p>
            <p className="education-info">
              <strong>Result:</strong> 94.60%
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Education;

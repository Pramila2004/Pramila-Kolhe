import React from 'react'

export default function project4() {
  return (
    <div className="project-container">
      {/* Project Title & Tagline */}
      <header className="project-header">
        <h1>Crop Recommendation System</h1>
        <p className="tagline">"Smart Farming – Get the Best Crop Recommendations Based on Soil & Weather!"</p>
      </header>

      {/* Overview / Introduction */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
        The Crop Recommendation System is a machine-learning-powered application that helps farmers and agricultural experts select the most suitable crop based on soil and weather conditions. By analyzing parameters such as soil nutrients, temperature, and humidity, this system provides optimized recommendations for better yield and efficiency.
        </p>
      </section>

      {/* Features */}
      <section className="project-section">
        <h2>Features</h2>
        <ul className="features-list">
          <li>🌱 <b>Crop Prediction</b> – Suggests the best crop based on soil and climate.</li>
          <li>📊 <b>Data Analysis</b> – Uses ML algorithms for prediction.</li>
          <li>🖥 <b>Interactive UI</b> – Simple and user-friendly interface.</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-list">
        <li><b>Frontend:</b> HTML, CSS, JavaScript</li>
          <li><b>Backend:</b> flask</li>
          <li><b>Machine Learning:</b> Scikit-Learn, Pandas, NumPy</li>
        </ul>
      </section>

      {/* Project Screenshots */}
      <section className="project-section">
        <h2>Project Screenshots</h2>
        <div className="screenshots">
          <img src="images-copy\cropRecommendation\home.png" alt="Home Page" />
          <img src="images-copy\cropRecommendation\input.png" alt="User Dashboard" />
          <img src="images-copy\cropRecommendation\output.png" alt="Property Details Page" />

        </div>
      </section>

    </div>
  )
}

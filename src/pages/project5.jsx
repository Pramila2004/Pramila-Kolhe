import React from 'react'

export default function Project5() {
  return (
    <div className="project-container">
      {/* Project Title & Tagline */}
      <header className="project-header">
        <h1>AI Trip Planner 🧠✈️</h1>
        <p className="tagline">"Smartly plan your dream trip – day-wise activities, hotel picks, and more!"</p>
      </header>

      {/* Overview / Introduction */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
          AI Trip Planner is a smart travel assistant that leverages AI (Gemini API) to generate day-wise travel plans with recommended places, activities, and hotel stays. View all locations directly on an interactive map, save your plans, and get personalized recommendations in just a few clicks!
        </p>
      </section>

      {/* Features */}
      <section className="project-section">
        <h2>Features</h2>
        <ul className="features-list">
          <li>📅 <b>Day-wise Activity Planner</b> – Creates daily itineraries tailored to your destination.</li>
          <li>🏨 <b>Hotel Recommendations</b> – Suggests top-rated hotels near your travel spots.</li>
          <li>🗺️ <b>Map View</b> – See all planned places and hotels on a live map.</li>
          <li>💾 <b>Trip Saving</b> – Save your plans and revisit them anytime.</li>
          <li>🤖 <b>AI Integration</b> – Uses Gemini API for generating Responses.</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-list">
          <li><b>Frontend:</b> React, Tailwind CSS</li>
          <li><b>Backend:</b> Node.js, Express.js, MongoDB</li>
          <li><b>AI/ML:</b> Gemini API</li>
          <li><b>Authentication:</b> JWT & Cookies</li>
        </ul>
      </section>

      {/* Project Screenshots */}
      <section className="project-section">
        <h2>Project Screenshots</h2>
        <div className="screenshots">
          <img src="images-copy/Ai-Trip-Planner/1.png" alt="Home Page" />
          <img src="images-copy/Ai-Trip-Planner/2.png" alt="Home Page" />
          <img src="images-copy/Ai-Trip-Planner/4.png" alt="Home Page" />
          <img src="images-copy/Ai-Trip-Planner/51.png" alt="Home Page" />
          <img src="images-copy/Ai-Trip-Planner/5.png" alt="Home Page" />
          <img src="images-copy/Ai-Trip-Planner/6.png" alt="Home Page" />
          <img src="images-copy/Ai-Trip-Planner/7.png" alt="Home Page" />

        </div>
      </section>
      <section className="project-section">
        <h2>Demo & Source Code</h2>
        <div className="project-links">
          <a href="https://trip-planner-l8g7.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn">
            🔗 Live Demo
          </a>
          <a href="https://github.com/Pramila2004/AI-Trip-Planner" target="_blank" rel="noopener noreferrer" className="btn">
            🔗 GitHub Repository
          </a>
        </div>
      </section>
    </div>
  )
}

import React from 'react'

export default function project2() {
  return (
    <div className="project-container">
      {/* Project Title & Tagline */}
      <header className="project-header">
        <h1>Real Estate Platform</h1>
        <p className="tagline">"Find, Save, and Create Your Dream Property Listings!"</p>
      </header>

      {/* Overview / Introduction */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
          Real Estate Platform is a platform that allows users to create, explore, save, and list 
          properties. Whether you're looking to buy, rent, or sell, this platform provides an 
          easy-to-use interface to find properties, save favorites, and manage listings.
        </p>
      </section>

      {/* Features */}
      <section className="project-section">
        <h2>Features</h2>
        <ul className="features-list">
          <li>✅ User Authentication – Secure login and sign-up.</li>
          <li>✅ Property Listings – Browse available properties with detailed information.</li>
          <li>✅ Save Favorites – Save properties to your wishlist.</li>
          <li>✅ Create & Manage Listings – Post properties for sale or rent.</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-list">
          <li><strong>Frontend:</strong> React.js, HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Authentication:</strong> JWT Authentication</li>
          <li><strong>Hosting:</strong> Deployed on Render.com</li>
          <li><strong>Version Control:</strong> Git & GitHub</li>
        </ul>
      </section>

      {/* Project Screenshots */}
      <section className="project-section">
        <h2>Project Screenshots</h2>
        <div className="screenshots">
          <img src="images-copy\realEstate\real-estate-home.png" alt="Home Page" />
          <img src="images-copy\realEstate\real-etstate-list.png" alt="User Dashboard" />
          <img src="images-copy\realEstate\real-estate-profile.png" alt="Property Details Page" />
          <img src="images-copy\realEstate\real-estate-single.png" alt="Property Listing Form" />
          <img src="images-copy\realEstate\real-estate-slider.png" alt="Property Listing Form" />
          <img src="images-copy\realEstate\real-estate-add.png" alt="Property Listing Form" />
          <img src="images-copy\realEstate\real-estate-saved.png" alt="Property Listing Form" />
        </div>
      </section>

      {/* Demo & Source Code */}
      <section className="project-section">
        <h2>Demo & Source Code</h2>
        <div className="project-links">
          <a href="https://real-estate-website-client.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn">
            🔗 Live Demo
          </a>
          <a href="https://github.com/Pramila2004/Real-Estate-Website" target="_blank" rel="noopener noreferrer" className="btn">
            🔗 GitHub Repository
          </a>
        </div>
      </section>
    </div>
  )
}

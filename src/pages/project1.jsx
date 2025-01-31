import React from "react";
import "../style/project1.css"; // Import the CSS file

const Project1 = () => {
  return (
    <div className="project-container">
      {/* Project Title & Tagline */}
      <header className="project-header">
        <h1>Rasoi Diaries</h1>
        <p className="tagline">"Your personal cookbook – Explore, Share, and Save Recipes!"</p>
      </header>

      {/* Overview / Introduction */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
          Rasoi Diaries is an interactive recipe-sharing platform that allows users to discover,
          share, and save their favorite recipes. Whether you're a home cook, a professional chef,
          or someone just starting out, Rasoi Diaries provides an intuitive interface to explore
          a variety of cuisines, step-by-step cooking guides, and user-generated recipes.
        </p>
      </section>

      {/* Features */}
      <section className="project-section">
        <h2>Features</h2>
        <ul className="features-list">
          <li>✅ User Authentication – Register/Login to manage your own recipes.</li>
          <li>✅ Recipe Posting – Users can create and publish their own recipes.</li>
          <li>✅ Search & Filter – Find recipes by category, ingredients, or difficulty level.</li>
          <li>✅ Bookmark & Save – Save your favorite recipes for easy access later.</li>
          <li>✅ Ratings & Reviews – Users can rate and review recipes.</li>
          <li>✅ Step-by-Step Instructions – Guided cooking instructions with images.</li>
          <li>✅ Responsive Design – Fully optimized for mobile and desktop.</li>
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
          <img src="images-copy\rasoiDiries\rasoi-diries-home.png" alt="Home Page" />
          <img src="images-copy\rasoiDiries\rasoi-diries-createdRecipies.png" alt="Recipe Details Page" />
          <img src="images-copy\rasoiDiries\rasoi-diries-profile.png" alt="Recipe Details Page" />
          <img src="images-copy\rasoiDiries\rasoi-Diries-search.png" alt="User Dashboard" />
          <img src="images-copy\rasoiDiries\rasoi-diries-favourite.png" alt="Recipe Upload Form" />
          <img src="images-copy\rasoiDiries\rasoi-diries-addRecipe.png" alt="Recipe Upload Form" />
          <img src="images-copy\rasoiDiries\rasoi-diries-updateProfile.png" alt="Recipe Upload Form" />
          <img src="images-copy\rasoiDiries\rasoi-diries-single.png" alt="Recipe Upload Form" />

        </div>
      </section>

      {/* Demo & Source Code */}
      <section className="project-section">
        <h2>Demo & Source Code</h2>
        <div className="project-links">
          <a href="https://rasoi-diaries.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn">
            🔗 Live Demo
          </a>
          <a href="https://github.com/Pramila2004/RasoiDiaries" target="_blank" rel="noopener noreferrer" className="btn">
            🔗 GitHub Repository
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project1;

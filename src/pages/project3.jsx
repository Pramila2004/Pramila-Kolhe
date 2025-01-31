import React from 'react'

export default function project2() {
  return (
    <div className="project-container">
      {/* Project Title & Tagline */}
      <header className="project-header">
        <h1>Backed Artifact</h1>
        <p className="tagline">"A Sweet E-Commerce Experience – Order, Customize, and Enjoy Cakes!"</p>
      </header>

      {/* Overview / Introduction */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
        Backed Artifact is an e-commerce platform designed for cake lovers. Users can browse a variety of cakes, apply filters, update their profiles, and securely checkout with authentication. Whether for birthdays, weddings, or special occasions, Backed Artifact ensures a smooth and delightful shopping experience.
        </p>
      </section>

      {/* Features */}
      <section className="project-section">
        <h2>Features</h2>
        <ul className="features-list">
          <li>🛒 Cake Browsing – View a variety of cakes with high-quality images.</li>
          <li>🔍 Filter & Search – Easily find cakes by category, flavor, or price.</li>
          <li>📝 Profile Management – Users can update their profile details.</li>
          <li>🔑 Authentication – Secure login and signup using Django authentication.</li>
          <li>💳 Checkout System – Seamless order placement and secure payments.</li>
          <li>📱 Responsive Design – Fully optimized for mobile and desktop.</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-list">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> Django</li>
          <li><strong>Database:</strong> SQLite</li>
        </ul>
      </section>

      {/* Project Screenshots */}
      <section className="project-section">
        <h2>Project Screenshots</h2>
        <div className="screenshots">
          <img src="images-copy\backedArtifact\home.png" alt="Home Page" />
          <img src="images-copy\backedArtifact\list.png" alt="User Dashboard" />
          <img src="images-copy\backedArtifact\profile.png" alt="Property Details Page" />
          <img src="images-copy\backedArtifact\cart.png" alt="Property Listing Form" />
          <img src="images-copy\backedArtifact\checkout.png" alt="Property Listing Form" />
          <img src="images-copy\backedArtifact\chef.png" alt="Property Listing Form" />
          <img src="images-copy\backedArtifact\order.png" alt="Property Listing Form" />
          <img src="images-copy\backedArtifact\updateprofile.png" alt="Property Listing Form" />
          <img src="images-copy\backedArtifact\testimonies.png" alt="Property Listing Form" />
        </div>
      </section>

    </div>
  )
}

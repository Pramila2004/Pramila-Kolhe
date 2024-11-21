import React, { useState } from "react";
import { Link } from "react-scroll";

const MyNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="navbar-header home">
      <div className="navbar-top">
        <div className="navbar-brand">Pramila</div>
        <nav className={`navbar-links ${isMobile ? "active" : ""}`}>
        <Link to="home" className="navbar-link" smooth={true} duration={800} offset={-70}>
            Home
          </Link>
          <Link to="about" className="navbar-link" smooth={true} duration={800} offset={-70}>
            About
          </Link>
          <Link to="education" className="navbar-link" smooth={true} duration={800} offset={-70}>
            Education
          </Link>
          <Link to="projects" className="navbar-link" smooth={true} duration={800} offset={-70}>
            Projects
          </Link>
          <Link to="contact" className="navbar-link" smooth={true} duration={800} offset={-70}>
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default MyNavbar;

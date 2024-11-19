import React from "react";

const MyNavbar=()=> {
  return (
<header className="navbar-header">
      <div className="navbar-top">
        <div className="navbar-brand">Pramila</div>
        <nav className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#education" className="navbar-link">Education</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}


export default MyNavbar;
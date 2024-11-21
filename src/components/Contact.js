import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing React Icons

const Contact = () => {
    return (
        <div className="contact-container contact">
        {/* Left Section */}
        <div className="contact-left">
          <img src="images-copy/contact.png" alt="Contact Us" className="contact-image" />
        </div>
  
        {/* Right Section */}
        <div className="contact-right">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
          Feel free to reach out. 
          I am always open to connecting and engaging in meaningful conversations to explore new opportunities.
          </p>
          <div className="contact-info">
            <p><strong>WhatsApp:</strong> +91-8080286391</p>
            <p><strong>Email:</strong> nkolhepramila@gmail.com</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/Pramila2004" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/pramila-kolhe-91740228a/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    );
};

export default Contact;

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing React Icons

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-text">
                    <h1 className="contact-title">Contact</h1>
                    <h4 className="contact-subtitle">Feel free to reach out!</h4>
                </div>
                <div className="contact-links">
                    <a href="https://github.com/Pramila2004" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/pramila-shankar-kolhe" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="mailto:nkolhepramila@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={30} />
                    </a>
                    <a href="https://twitter.com/Pramila2004" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;

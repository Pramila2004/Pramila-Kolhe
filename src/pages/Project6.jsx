import React from 'react'

export default function Project5() {
    return (
        <div className="project-container">
            {/* Project Title & Tagline */}
            <header className="project-header">
                <h1>Skill Connect 🎓🤝</h1>
                <p className="tagline">"Empowering peer learning , through seamless skill swapping!"</p>
            </header>

            {/* Overview / Introduction */}
            <section className="project-section">
                <h2>Overview</h2>
                <p>
                    SkillConnect is a full-stack web platform that enables users to exchange skills through asynchronous requests and real-time chat. Users can showcase what they can teach and what they want to learn, send or receive swap requests, and collaborate anonymously within chat rooms. It also features mentor reviews, admin management tools, and a personalized profile system — all built for a smooth and secure skill-sharing experience.
                </p>
            </section>

            {/* Features */}
            <section className="project-section">
                <h2>Features</h2>
                <ul className="features-list">
                    <li>🔍 <b>Mentor Search & Discovery</b> – Find mentors by skills and interests using smart filters.</li>
                    <li>🔁 <b>Skill Swap Requests</b> – Send and receive requests to learn or teach skills.</li>
                    <li>💬 <b>Real-time Chat</b> – Communicate instantly with accepted connections using Socket.IO.</li>
                    <li>👤 <b>User Profile Management</b> – View, edit, and showcase teachable and learnable skills.</li>
                    <li>⭐ <b>Review & Rating System</b> – Leave feedback and rate mentors after sessions.</li>
                    <li>🛠️ <b>Admin Dashboard</b> – Manage users, monitor requests, and analyze top taught/demanded skills.</li>
                </ul>
            </section>


            {/* Technologies Used */}
            <section className="project-section">
                <h2>Technologies Used</h2>
                <ul className="tech-list">
                    <li><b>Frontend:</b> React, Tailwind CSS</li>
                    <li><b>Backend:</b> Node.js, Express.js, MongoDB</li>
                    <li><b>Real-Time:</b> Socket.IO for live chat</li>
                    <li><b>Authentication:</b> JWT & Cookies</li>
                </ul>
            </section>


            {/* Project Screenshots */}
            <section className="project-section">
                <h2>Project Screenshots</h2>
                <div className="screenshots">
                    <img src="images-copy/skillConnect/1.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/2.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/13.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/3.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/4.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/5.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/6.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/7.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/8.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/9.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/10.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/11.png" alt="Home Page" />
                    <img src="images-copy/skillConnect/12.png" alt="Home Page" />

                </div>
            </section>
            <section className="project-section">
                <h2>Demo & Source Code</h2>
                <div className="project-links">
                    <a href="https://skillconnect-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="btn">
                        🔗 Live Demo
                    </a>
                    <a href="https://github.com/Pramila2004/SkillConnect" target="_blank" rel="noopener noreferrer" className="btn">
                        🔗 GitHub Repository
                    </a>
                </div>
            </section>
        </div>
    )
}

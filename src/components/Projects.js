import React from "react";

const Projects = () => {
    return (
        <div className="project-container projects">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="pro">

                <div className="project-card">
                    <img className="project-image" src='images-copy/skillConnect/1.png' alt='' />
                    <h3 className="project-title">Skill Connect</h3>
                    <p className="project-description">SkillConnect is a MERN stack-based platform that enables users to exchange skills by connecting learners with mentors. It features skill-based matchmaking, real-time chat, request management, and an admin dashboard for user and request oversight. 🎓🤝</p>
                    <h4 className="project-technologies">
                        HTML, Tailwind CSS, JavaScript, React, Express.js, Node.js, MongoDB, Socket.IO
                    </h4>

                    <div className="project-buttons">
                        <a href="/project6">
                            <button className="project-btn demo-btn">
                                Learn more
                            </button>
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img className="project-image" src='images-copy/Ai-Trip-Planner/1.png' alt='' />
                    <h3 className="project-title">AI Trip Planner</h3>
                    <p className="project-description">AI Trip Planner is a smart full-stack travel app that generates day-wise itineraries with hotel suggestions using the Gemini API. Users can view activities on an interactive map, save trips, and access them anytime. 📍✈️</p>
                    <h4 className="project-technologies"> HTML,Tailwind CSS, JS, React, Express, Node, MongoDB, Gamini API</h4>
                    <div className="project-buttons">
                        <a href="/project5">
                            <button className="project-btn demo-btn">
                                Learn more
                            </button>
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img className="project-image" src='images-copy/rasoiDiries/rasoi-diries-home.png' alt='' />
                    <h3 className="project-title">Rasoi Diaries</h3>
                    <p className="project-description">
                        Our platform lets users share and discover delicious recipes with ease. Connect with food lovers, explore new dishes, and showcase your own creations😊🍽️!</p>
                    <h4 className="project-technologies"> HTML, CSS, JS, React, Express, Node, MongoDB</h4>
                    <div className="project-buttons">
                        <a href="/project1">
                            <button className="project-btn demo-btn">
                                Learn more
                            </button>
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-image" src='images-copy/realEstate/real-estate-home.png' alt='' />
                    <h3 className="project-title">Real Estate Platform</h3>
                    <p className="project-description">Our real estate platform helps users to share selling and rent properties effortlessly. Find your dream home or list your property with ease! 🏡✨</p>
                    <h4 className="project-technologies"> HTML, CSS, JS, React, Express, Node, MongoDB</h4>
                    <div className="project-buttons">
                        <a href="/project2">
                            <button className="project-btn demo-btn">
                                Learn more
                            </button>
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-image" src='images-copy\backedArtifact\home.png' alt='' />
                    <h3 className="project-title">Backed Artifacts Cake shop website</h3>
                    <p className="project-description">Our cake shop website lets customers browse, and order delicious cakes online. Celebrate every occasion with a sweet treat! 🎂🎉</p>
                    <h4 className="project-technologies"> HTML, CSS, JS ,Django </h4>
                    <a href="/project3">
                        <button className="project-btn demo-btn">
                            Learn more
                        </button>
                    </a>
                </div>
                <div className="project-card">
                    <img className="project-image" src='images-copy/ml-project.png' alt='' />
                    <h3 className="project-title">Crop Recomendation System</h3>
                    <p className="project-description">Our crop recommendation system helps farmers choose the best crops based on soil, weather, and location data. Boost yield and optimize farming decisions! 🌾🚜</p>
                    <h4 className="project-technologies">HTML, CSS, Python, Pandas, NumPy, Matplotlib, flask</h4>
                    <div className="project-buttons">
                        <a href="/project4">
                            <button className="project-btn demo-btn">
                                Learn more
                            </button>
                        </a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Projects
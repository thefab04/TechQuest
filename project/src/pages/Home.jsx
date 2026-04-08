import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoadmapCard from "../components/RoadmapCard";
import { Cloud, Cybersecurity, DataAI, Design, DevRoles, Testing } from "../components/Roles";
import SearchBox from "../components/jobsearchbox";
import Suggestion from "../components/suggestion";
import About from "./About";
import ProgressPieChart from "../components/ProgressPieChart";
import { useAuth } from "../context/AuthContext";



// Define total levels for each role
const roleLevels = {
  "Frontend Developer": 10,
  "Backend Developer": 10,
  "Full Stack Developer": 11,
  "Mobile App Developer": 10,
  "Game Developer": 10,
  "Embedded Systems Developer": 10,

  "Cloud Engineer": 11,
  "DevOps Engineer":13,
  "Site Reliability Engineer":11,
  "Platform Engineer":12,

  "Cybersecurity Analyst": 9,
  "Ethical Hacker":10,
  "SOC Analyst":9,
  "Cloud Security Engineer":6,
  "Security Architect": 6,

  "Data Scientist": 9,
  "Data Analyst": 6,
  "Data Engineer": 8,
  "Machine learning Engineer":8,
  "AI Engineer":6,

  "UI-UX Designer":7,
  "Game Designer": 7,
  "Product Designer": 7,

  "Performance Tester": 7,
  "QA Engineer": 7,
  "Test Automation Engineer": 7,
};

const Home = () => {
  const [username, setUsername] = useState("");
  const [progress, setProgress] = useState([]);
  const navigate = useNavigate();
  const { isGuest } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  /*const user = JSON.parse(localStorage.getItem("user") || "null");*/
  const storedUser = localStorage.getItem("user");
  const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
useEffect(() => {
  if (isGuest) {
    setUsername("Guest");
    setProgress([]);
    return;
  }

  const storedName = localStorage.getItem("username");

  if (storedName) setUsername(storedName);
  else if (user?.name) setUsername(user.name);
  else setUsername("");

  if (user?._id) {
    fetch(`http://localhost:5000/api/progress/${user._id}`)
      .then((res) => res.json())
      .then((data) => setProgress(data))
      .catch((err) => console.error("Error fetching progress:", err));
  }
}, [isGuest, user?._id]);

  const handleClick = (role) => {
    navigate(`/roadmap/${encodeURIComponent(role)}`);
  };

  return (
    <>
      <section className="main-grid">
        <jobpart className="jobspart">


          <div className="glass3">
            <h2 id="role-heading1">Create your Resume here</h2>
            <button onClick={() => navigate('/resume')} className="animated-button">Go to Resume Builder</button>
          </div>

          <div className="glass3">
            <SearchBox />
          </div>
                    <div className="glass3">
            <h2 id="role-heading1">About TechQuest</h2>
            <button className="animated-button"
  onClick={() => setShowPopup(true)}>
              Explore</button>
          </div>
          {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">

      <button
        className="close-btn"
        onClick={() => setShowPopup(false)}
      >
        ✕
      </button>
      <About />

    </div>
  </div>
)}

          <div className="glass3">
            <Suggestion />
          </div>

        </jobpart>

        <rolespart className="rolespart">
          <div>
          
          <p id="welcometext">Hello, {username || "Guest..."}</p>
<br />
            <h2 id="Welcome">Welcome to <b>TechQuest</b></h2>
            <p id="subline">Every click brings you one step closer to success...</p>
          
            

            {/* Show user progress summary if available */}
            {progress.length > 0 && (
              <div className="progress-summary glass3">
                <h2>Your Progress:</h2>
                <div className="progress-pie-charts">
                  {progress.map((p, i) => (
                    <ProgressPieChart
                      key={i}
                      role={p.role}
                      currentLevel={p.level}
                      totalLevels={roleLevels[p.role] || 10}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <br /><br /><br /><br /><br /><br />

          {/* Developer Roles */}
          <div className="glass1">
            <h1>EXPLORE ROADMPAS</h1>
            <div className="glass2">
            <h2 id="role-heading">DEVELOPER ROLES</h2>
            <div className="roadmap-container">
              {DevRoles.map((item, index) => (
                <div
                  key={index}
                  className="role-card-wrapper"
                  onClick={() => handleClick(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  <RoadmapCard title={item.title} />
                </div>
              ))}
            </div>
          </div>
          

          <br />

          {/* Cloud & DevOps Roles */}
          <div className="glass2">
            <h2 id="role-heading">CLOUD & DEVOPS ROLES</h2>
            <div className="roadmap-container">
              {Cloud.map((item, index) => (
                <div
                  key={index}
                  className="role-card-wrapper"
                  onClick={() => handleClick(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  <RoadmapCard title={item.title} />
                </div>
              ))}
            </div>
          </div>

          <br />

          {/* Cybersecurity Roles */}
          <div className="glass2">
            <h2 id="role-heading">CYBER SECURITY ROLES</h2>
            <div className="roadmap-container">
              {Cybersecurity.map((item, index) => (
                <div
                  key={index}
                  className="role-card-wrapper"
                  onClick={() => handleClick(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  <RoadmapCard title={item.title} />
                </div>
              ))}
            </div>
          </div>

          <br />

          {/* Data Science Roles */}
          <div className="glass2">
            <h2 id="role-heading">DATA SCIENCE ROLES</h2>
            <div className="roadmap-container">
              {DataAI.map((item, index) => (
                <div
                  key={index}
                  className="role-card-wrapper"
                  onClick={() => handleClick(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  <RoadmapCard title={item.title} />
                </div>
              ))}
            </div>
          </div>

          <br />

          {/* Testing Roles */}
          <div className="glass2">
            <h2 id="role-heading">TESTING ROLES</h2>
            <div className="roadmap-container">
              {Testing.map((item, index) => (
                <div
                  key={index}
                  className="role-card-wrapper"
                  onClick={() => handleClick(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  <RoadmapCard title={item.title} />
                </div>
              ))}
            </div>
          </div>

          <br />

          {/* Design Roles */}
          <div className="glass2">
            <h2 id="role-heading">DESIGNER ROLES</h2>
            <div className="roadmap-container">
              {Design.map((item, index) => (
                <div
                  key={index}
                  className="role-card-wrapper"
                  onClick={() => handleClick(item.title)}
                  style={{ cursor: "pointer" }}
                >
                  <RoadmapCard title={item.title} />
                </div>
              ))}
            </div>
          </div>

          </div>
        </rolespart>
      </section>
    </>
  );
};

export default Home;

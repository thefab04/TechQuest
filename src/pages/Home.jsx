import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoadmapCard from "../components/RoadmapCard";
import { Cloud, Cybersecurity, DataAI, Design, DevRoles, Testing } from "../components/Roles";
import ResumeBuilder from "../components/resumebuild";
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
  "Cloud Engineer": 10,
  "Cybersecurity Analyst": 10,
  "Data Scientist": 10,
  "Data Analyst": 10,
  "Data Engineer": 10,
  "UI/UX Designer": 10,
  "Graphic Designer": 10,
  "Product Designer": 10,
  "Software Tester": 10,
  "QA Engineer": 10,
  "Automation Tester": 10,
};

const Home = () => {
  const [username, setUsername] = useState("");
  const [progress, setProgress] = useState([]);
  const navigate = useNavigate();
  const { isGuest } = useAuth();

  /*const user = JSON.parse(localStorage.getItem("user") || "null");*/
  const storedUser = localStorage.getItem("user");
  const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (isGuest) {
      setUsername("Guest");
      setProgress([]); // No progress for guest
    } else {
      // Get username from localStorage (or user object)
      const storedName = localStorage.getItem("username");
      if (storedName) setUsername(storedName);
      else if (user?.name) setUsername(user.name);
      else setUsername(""); // Ensure it's empty if nothing is found

      // Fetch user progress if logged in
      if (user?._id) {
        fetch(`https://techquest-backend.onrender.com/api/progress/${user._id}`)
          .then((res) => res.json())
          .then((data) => setProgress(data))
          .catch((err) => console.error("Error fetching progress:", err));
      }
    }
  }, [isGuest, user]);

  const handleClick = (role) => {
    navigate(`/roadmap/${encodeURIComponent(role)}`);
  };

  return (
    <>
      <section className="main-grid">
        <jobpart className="jobspart">
          <div className="glass3">
            <About />
          </div>

          <div className="glass3">
            <ResumeBuilder />
          </div>

          <div className="glass3">
            <Suggestion />
          </div>
        </jobpart>

        <rolespart className="rolespart">
          <div>
            <p id="welcometext">Hello, {username || "Guest"}</p>
            <h5 id="paratext">Welcome to Tech Quest</h5>
            <p id="paratext">Every click brings you one step closer to success.</p>

            {/* Show user progress summary if available */}
            {progress.length > 0 && (
              <div className="progress-summary glass3">
                <h4>Your Progress:</h4>
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
          <div className="glass2">
            <h6 id="role-heading">Explore Roadmaps</h6>
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
        </rolespart>
      </section>
    </>
  );
};

export default Home;

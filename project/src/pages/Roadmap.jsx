import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dev } from "../data/developer_data.jsx";
import { cloud } from "../data/cloud_data.jsx";
import { cyber } from "../data/cybersec_data.jsx";
import { datascience } from "../data/datascience_data.jsx";
import { testing } from "../data/testing_data.jsx";
import { design } from "../data/design_data.jsx";

function Roadmap() {
  const { role } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const roleMap = {
    "frontend developer": "frontenddev",
    "backend developer": "backenddev",
    "full stack developer": "fullstackdev",
    "mobile app developer": "mobileappdev",
    "game developer": "gamedev",
    "embedded system developer": "embeddedsystemdev",
    "cloud engineer": "cloudeng",
    "devops engineer": "devops",
    "site reliability engineer": "sitereliabilityeng",
    "platform engineer": "platformeng",
    "cybersecurity analyst": "cybersecurityanalyst",
    "ethical hacker": "ethicalhacker",
    "soc analyst": "socanalyst",
    "cloud security engineer": "cloudsecurity",
    "security architect": "securityarchitect",
    "data analyst": "dataanalyst",
    "data engineer": "dataeng",
    "data scientist": "datascientist",
    "machine learning engineer": "mleng",
    "ai engineer": "aieng",
    "qa engineer": "qaeng",
    "test automation engineer": "testautomationeng",
    "performance tester": "performancetester",
    "ui-ux designer": "uiux",
    "product designer": "productdesigner",
    "game designer": "gamedesigner",
  };

  // normalize safely
  const normalizedRole = role ? decodeURIComponent(role).toLowerCase() : "";
  const key = roleMap[normalizedRole];
  const data =
    (key && (dev[key] || cloud[key] || cyber[key] || datascience[key] || testing[key] || design[key])) ||
    null;

    const handleProgress = async (level) => {
  const user = JSON.parse(localStorage.getItem("user")); // or however you store user info
  if (!user) return alert("Please log in to save progress");

  try {
    const response = await fetch("http://localhost:5000/api/progress/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user._id,
        role,
        level,
      }),
    });
    const data = await response.json();
    if (data.success) {
      alert(`Progress saved! You completed level ${level}`);
    }
  } catch (err) {
    console.error(err);
    alert("Failed to save progress. Please try again.");
  }
};


  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // close on ESC
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll when modal/card open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const handleToggle = (index, e) => {
    // prevent accidental navigation if card is inside a Link
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (!data) {
    return (
      <div className="glasslevels1">
        <h2>{role} Roadmap</h2>
        <p>⚠️ Roadmap not found for this role.</p>
      </div>
    );
  }
  

  return (
    <div className="cardpage">
      <h2 id="rolehead">{role} Roadmap</h2>



<div className="glasslevels1">

      <section className="roadmap-grid1" >


        {data.levels && data.levels.length > 0 ? (
          data.levels.map((stage, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={(e) => handleToggle(index, e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleToggle(index, e);
              }}
              className={`roadmap-card1 ${activeIndex === index ? "active" : ""}`}
            >




              <div className="card-header">

                <h2 className="level-label">
                  Level {stage.level || stage.phase}:
                  <br /><br /><br /> {stage.title}
                </h2>
              </div>
<br /><br />

            <button
  className="animated-button3"
  onClick={(e) => {
    e.stopPropagation();
    handleProgress(index + 1); // passing level number
  }}
>
Mark Level {index + 1} as Completed ..✅
</button>



              {activeIndex === index && (
                <div className="roadmap-details">
                  <button
                    className="close-x"
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                  >
                    ×
                  </button>

                  <p className="why">
                    <strong className="subheadcard">
                      Why:
                      </strong>{" "}
                    {stage.description || stage.why || "No description available"}
                  </p>

                  <h4 className="subheadcard"> What You’ll Learn:</h4>
                  <ul className="listlearn">
                    {(stage.learningObjectives || stage.learn || []).map((topic, i) => (
                      <li key={i} className="listbox">{topic}</li>
                    ))}
                  </ul>

                  <h4 className="subheadcard"> Resources:</h4>
                  {stage.resources && stage.resources.length > 0 ? (
                    <ul className="listresources">
                      {stage.resources.map((res, i) => (
                        <li key={i} className="listrow">
                          <a href={res.url} target="_blank" rel="noopener noreferrer">
                            {res.name || res.home || res.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ color: "gray", fontStyle: "italic" }}>No resources for this level.</p>
                  )}

                  <p>
                    <strong className="subheadcard">Mission:</strong> {stage.mission || stage.missions || "No mission defined"}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>⚠️ No levels found for this role.</p>
        )}
      </section>

      {activeIndex !== null && (
        <div
          className="overlay-blur"
          onClick={() => setActiveIndex(null)}
          // stopPropagation inside overlay so inner clicks don't close until intended
          aria-hidden="true"
        />
      )}
    </div>
    </div>
  );
}

export default Roadmap;
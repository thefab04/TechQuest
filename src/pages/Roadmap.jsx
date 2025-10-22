
import React from "react";
import { useParams } from "react-router-dom";

import { dev } from "../data/developer_data.jsx";
import { cloud } from "../data/cloud_data.jsx";
import { cyber } from "../data/cybersec_data.jsx";
import { datascience } from "../data/datascience_data.jsx";
import { testing } from "../data/testing_data.jsx";
import { design } from "../data/design_data.jsx";



function Roadmap() {


  
const { role } = useParams();
  const roleMap = {
    "frontend developer" : "frontenddev",
    "backend developer" : "backenddev",
    "full stack developer" : "fullstackdev",
    "mobile app developer" : "mobileappdev",
    "game developer" : "gamedev",
    "embedded system developer" : "embeddedsystemdev",

    "cloud engineer" : "cloudeng",
    "devops engineer" : "devops",
    "site reliability engineer" : "sitereliabilityeng",
    "platform engineer" : "platformeng",

    "cybersecurity analyst" : "cybersecurityanalyst",
    "ethical hacker" : "ethicalhacker",
    "soc analyst" : "socanalyst",
    "cloud security engineer" : "cloudsecurity",
    "security architect" : "securityarchitect",

    "data analyst" : "dataanalyst",
    "data engineer" : "dataeng",
    "data scientist" : "datascientist",
    "machine learning engineer" : "mleng",
    "ai engineer" : "aieng",

    "qa engineer" : "qaeng",
    "test automation engineer" : "testautomationeng",
    "performance tester" : "performancetester",

    "ui-ux designer" : "uiux",
    "product designer" : "productdesigner",
    "game designer" : "gamedesigner"

  };

  
  const normalizedRole = decodeURIComponent(role).toLowerCase();
  const key = roleMap[normalizedRole];
  const data = dev[key] || cloud[key] || cyber[key] || datascience[key] || testing[key] || design[key] ;
  //const data = cloud[key];


return (
  <div className="roadmap-page">
    <h2>{role} Roadmap</h2>

    {data.levels && data.levels.length > 0 ? (
      data.levels.map((stage, index) => (
        <div key={index} className="roadmap-stage">
          <h3>
            Level {stage.level || stage.phase}: {stage.title}
          </h3>

          {/* Handle either 'description' or 'why' */}
          <p>
            <strong>Why:</strong> {stage.description || stage.why || "No description available"}
          </p>

          {/* Handle either 'learningObjectives' or 'learn' */}
          <h4>🎯 What You’ll Learn:</h4>
          <ul>
            {(stage.learningObjectives || stage.learn || []).map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>

          {/* Resources remain the same */}
          <h4>📚 Resources:</h4>

{stage.resources && stage.resources.length > 0 ? (
  <ul>
    {stage.resources.map((res, i) => (
      <li key={i}>
        <a href={res.url} target="_blank" rel="noopener noreferrer">
          {res.name || res.home}
        </a>
      </li>
    ))}
  </ul>
) : (
  <p style={{ color: "gray", fontStyle: "italic" }}>No resources for this level.</p>
)}


          {/* Handle either 'mission' or 'missions' */}
          <p>
            <strong>Mission:</strong> {stage.mission || stage.missions || "No mission defined"}
          </p>
        </div>
      ))
    ) : (
      <p>⚠️ No levels found for this role.</p>
    )}
  </div>
);

/*

  return (
    <div className="roadmap-page">
      <h2>{role} Roadmap</h2>

      {data ? (
        data.levels.map((stage, index) => (
          <div key={index} className="roadmap-stage">
            <h3>
              Level {stage.level || stage.phase}: {stage.title}
            </h3>
            <p>
              <strong>Why:</strong> {stage.description}
            </p>

            <h4>🎯 What You’ll Learn:</h4>
            <ul>
              {stage.learningObjectives.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>

            <h4>📚 Resources:</h4>
            <ul>
              {stage.resources.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>

            <p>
              <strong>Mission:</strong> {stage.mission}
            </p>

            
          </div>
        ))
      ) : (
        <p>⚠️ Roadmap not found for this role.</p>
      )}
    </div>
  );
}

export default Roadmap;

*/

/*
if (!data) {
    // fallback if the role is not found
    return (
      <div className="roadmap-page">
        <h2>{role} Roadmap</h2>
        <p>⚠️ Roadmap not found for this role.</p>
      </div>
    );
  }

  return (
    <div className="roadmap-page">
      <h2>{role} Roadmap</h2>
      {data.levels && data.levels.length > 0 ? (
        data.levels.map((stage, index) => (
          <div key={index} className="roadmap-stage">
            <h3>
              Level {stage.level || stage.phase}: {stage.title}
            </h3>
            <p>
              <strong>Why:</strong> {stage.description}
            </p>

            <h4>🎯 What You’ll Learn:</h4>
            <ul>
              {stage.learningObjectives.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>

            <h4>📚 Resources:</h4>
            <ul>
              {stage.resources.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>

            <p>
              <strong>Mission:</strong> {stage.mission}
            </p>
          </div>
        ))
      ) : (
        <p>⚠️ No levels found for this role.</p>
      )}
    </div>
  );

*/



}

export default Roadmap;
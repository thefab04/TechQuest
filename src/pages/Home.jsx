import React from "react";
import { useNavigate } from "react-router-dom";
import RoadmapCard from "../components/RoadmapCard"; //  import the component
import { Cloud, Cybersecurity, DataAI, Design, DevRoles, Testing} from "../components/Roles"; // import the roles
//import { dev } from "../data/developer_data";
//import SearchBox from "../components/jobsearchbox";
import ResumeBuilder from "../components/resumebuild";
import Suggestion from "../components/suggestion";
import About from "./About";

function Home() {


    const navigate = useNavigate();

  const handleClick = (role) => {
    navigate(`/roadmap/${role}`);
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

      <div >
      <p id="welcometext">Hi there! </p>
       <p id="paratext">  Every click brings you one step closer to success.</p>
</div>

<br /><br /><br /><br /><br /><br />

<div className="glass2">

<h6 id="role-heading">Explore Roadmaps</h6>
    
<h2 id="role-heading">DEVELOPER ROLES</h2>
      <div className="roadmap-container">
        {DevRoles.map((item, index) => (
          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
      <h2 id="role-heading">CLOUD & DEVOPS ROLES</h2>
      <div className="roadmap-container">
        {Cloud.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
        <h2 id="role-heading">CYBER SECURITY ROLES</h2>
      <div className="roadmap-container">
        {Cybersecurity.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
      <h2 id="role-heading">DATA SCIENCE ROLES</h2>
      <div className="roadmap-container">
        {DataAI.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
        <h2 id="role-heading">TESTING ROLES</h2>
      <div className="roadmap-container">
        {Testing.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
    <h2 id="role-heading">DESIGNER ROLES</h2>
      <div className="roadmap-container">
        {Design.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>
</rolespart>


    </section>
    </>
  );
}
export default Home;

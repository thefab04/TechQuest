import React from "react";
import { useNavigate } from "react-router-dom";
import RoadmapCard from "../components/RoadmapCard"; //  import the component
import { Cloud, Cybersecurity, DataAI, Design, DevRoles, Testing} from "../components/Roles"; // import the roles
import { dev } from "../data/developer_data";


function Home() {


    const navigate = useNavigate();

  const handleClick = (role) => {
    navigate(`/roadmap/${role}`);
  };

  
  return (

    <section className="home-section">
      <h2>Roles</h2>

      <div className="roadmap-container">
        <h2 id="role-heading">DEVELOPER ROLES</h2>
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


<br />

      <div className="roadmap-container">
        <h2 id="role-heading">CLOUD & DEVOPS ROLES</h2>
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


<br />

      <div className="roadmap-container">
        <h2 id="role-heading">CYBER SECURITY ROLES</h2>
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


      <br />

      <div className="roadmap-container">
        <h2 id="role-heading">DATA SCIENCE ROLES</h2>
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

            <br />

      <div className="roadmap-container">
        <h2 id="role-heading">TESTING ROLES</h2>
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

                  <br />

      <div className="roadmap-container">
        <h2 id="role-heading">DESIGNER ROLES</h2>
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





    </section>
  );
}
export default Home;

import React from "react";


function RoadmapCard({ title, onClick }) {
  return (
<>
<div className="cards">
    <div
      className="roadmap-card"
      onClick={onClick}            
    >
      <h3>{title}</h3>
    </div>
    </div>

    </>
  );
}

export default RoadmapCard;
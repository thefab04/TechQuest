import React from 'react';

const Note = ({ title, content }) => {
  return (
    <div className="glass note-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Note;

import React from 'react';

function ProjectItem({ image, title, description }) {
  return (
    <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {title} </h1>
        <p> {description}</p>
    </div>
  );
}

export default ProjectItem;
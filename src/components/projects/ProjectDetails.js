import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            molestiae in tempora excepturi. Placeat ipsam ex cupiditate debitis
            ipsum in quibusdam possimus? Fuga, accusantium dignissimos! Beatae
            explicabo nobis sint asperiores!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Subho</div>
          <div>15th October, 12pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

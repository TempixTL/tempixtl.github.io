import React from 'react';
// Misc.
import data from './data';

function Projects() {
  const cards = data.map(project => {
    const {image, title, date, description, link, linkTitle} = project;
    return (
    <div key={title} className="card">
        <img
          src={image}
          className="card-img-top"
          alt={title + " image"}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <b>{date}</b>
            <br/>
            {description}
          </p>
          <a href={link} className="btn btn-primary mt-3">{linkTitle || "More Info"}</a>
        </div>
      </div>
    );
  });

  return (
    <div className="row justify-content-center">
      <div className="col-sm-10">
        <div className="card-deck">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Projects;

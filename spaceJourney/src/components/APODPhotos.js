import React from "react";

const APODPhotos = (props) => {
  return (
    <div>
      <span className="apodTitle">{props.title}</span>
      {props.link && props.link.indexOf("jpg") !== -1 ? (
        <img className="APODPhoto" src={props.link}></img>
      ) : props.link ? (
        <iframe
          className="APODPhoto"
          frameBorder="0"
          width="600"
          height="450"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={props.link}
        ></iframe>
      ) : null}
      <p className="description">{props.description}</p>
    </div>
  );
};

export default APODPhotos;

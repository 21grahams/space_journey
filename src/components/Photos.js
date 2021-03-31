import React from "react";

const Photos = (props) => {
  return (
    <div>
        <h2 className='title'>{props.title}</h2>
        <img className="image" src={props.link}></img>
        <p className='description'>{props.description}</p>
    </div>
  );
};

export default Photos;

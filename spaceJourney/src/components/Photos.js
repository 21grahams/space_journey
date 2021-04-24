import React from "react";

const Photos = (props) => {

  return (
    <div>
        <span className='title'>{props.title}</span>
        <img className="image" src={props.link}></img>
        <p className='description'>{props.description}</p>
    </div>
  );
};

export default Photos;

import React from "react";

const Photos = (props) => {
  return (
    <div>
      <div>
        <img className="image" src={props.link}></img>
      </div>
      <div>
        {props.sentence}
        {props.description}
      </div>
    </div>
  );
};

export default Photos;

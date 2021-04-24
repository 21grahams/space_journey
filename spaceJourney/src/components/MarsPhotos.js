import React from "react";

const MarsPhotos = (props) => {
  return (
    <div>
      <div className="title">{props.picture.camera.full_name}</div>
      <img className="image" src={props.picture.img_src}></img>
    </div>
  );
};

export default MarsPhotos;

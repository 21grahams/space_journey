import React from "react";

const MarsPhotos = (props) => {
  return (
    <div>
      <img className="image" src={props.picture.img_src}></img>
      <div className="title">{props.picture.camera.full_name}</div>
    </div>
  );
};

export default MarsPhotos;

import React from "react";

const MarsPhotos = (props) => {
  return (
    <div>
      <div className="marsTitle">{props.picture.camera.full_name}</div>
      <img className="marsPhoto" src={props.picture.img_src}></img>
    </div>
  );
};

export default MarsPhotos;

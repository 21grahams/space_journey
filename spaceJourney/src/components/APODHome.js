import React from "react";
import APODPhotos from "./APODPhotos";

const APODHome = (props) => {
  const titles = [];
  const url = [];
  const descriptions = [];

  titles.push(props.allData.title);
  url.push(props.allData.url);
  descriptions.push(props.allData.explanation);

  return (
    <div>
      {titles.map((title, i) => (
        <APODPhotos title={title} key={i} />
      ))}

      {url.map((link, i) => (
        <APODPhotos link={link} key={i} />
      ))}

      {descriptions.map((description, i) => (
        <APODPhotos description={description} key={i} />
      ))}
    </div>
  );
};

export default APODHome;

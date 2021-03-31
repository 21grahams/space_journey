import React from "react";
import Photos from "./Photos";

const Home = (props) => {
  const titles = [];
  const url = [];
  const descriptions = [];

  titles.push(props.allData.title);
  url.push(props.allData.url);
  descriptions.push(props.allData.explanation);

  return (
    <div>
      {titles.map((title, i) => (
        <Photos title={title} key={i} />
      ))}

      {url.map((link, i) => (
        <Photos link={link} key={i} />
      ))}

      {descriptions.map((description, i) => (
        <Photos description={description} key={i} />
      ))}
    </div>
  );
};

export default Home;

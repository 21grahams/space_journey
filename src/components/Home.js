import React from "react";
import Photos from "./Photos";

const Home = (props) => {
  const title = [];
  const url = [];
  const summary = [];

  title.push(props.allData.title);
  url.push(props.allData.url);
  summary.push(props.allData.explanation);

  return (
    <div>
      {url.map((link, i) => (
        <Photos link={link} key={i} />
      ))}

      {title.map((description, i) => (
        <Photos description={description} key={i} />
      ))}

      {summary.map((sentence, i) => (
        <Photos sentence={sentence} key={i} />
      ))}
    </div>
  );
};

export default Home;

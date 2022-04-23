import React, { useState, useEffect } from "react";
import axios from "axios";
import APODHome from "./APODHome";
import MarsHome from "./MarsHome";
import { Button, Modal } from "react-bootstrap";
import ImageModal from "./ImageModal";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([]);
  const [marsData, setMarsData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [blankDisplayApod, setBlankDisplayApod] = useState(true);
  const [blankDisplayMars, setBlankDisplayMars] = useState(true);

  // create methods here
  const getAllPics = () => {
    axios
      .get("/photos")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error with NASA photo: ", err));
    takeMeHomeApod();
  };

  const handleModal = () => {
    setModalShow(!modalShow);
  };

  const newUser = (userInfo) => {
    axios
      .post("/user", userInfo)
      .then((res) => alert("Thanks for Joining!"))
      .catch((err) => console.log("Error with Post Request: ", err));
  };

  const takeMeHomeApod = () => {
    setBlankDisplayApod(!blankDisplayApod);
  };

  const takeMeHomeMars = () => {
    setBlankDisplayMars(!blankDisplayMars);
  };

  const marsRover = () => {
    axios
      .get("/mars")
      .then((res) => setMarsData(res.data))
      .catch((err) => console.log("Error with Mars Data Request: ", err));
    takeMeHomeMars();
  };

  return (
    <div>
      {blankDisplayApod ? (
        <Button
          className="journeyButton"
          variant="primary"
          onClick={getAllPics}
        >
          Picture Of The Day!
        </Button>
      ) : (
        <Button
          className="findMeButton"
          variant="dark"
          onClick={takeMeHomeApod}
        >
          Let's Go Home
        </Button>
      )}
      <Button className="joinUsButton" variant="primary" onClick={handleModal}>
        Join Us
      </Button>

      {blankDisplayMars ? (
        <Button
          className="browseNasaButton"
          variant="primary"
          onClick={marsRover}
        >
          Mars Rover Pictures
        </Button>
      ) : (
        <Button
          className="browseNasaButton"
          variant="dark"
          onClick={takeMeHomeMars}
        >
          Let's Go Home
        </Button>
      )}

      <ImageModal newUser={newUser} show={modalShow} onHide={handleModal} />

      {!blankDisplayApod ? (
        <APODHome allData={data} onClick={takeMeHomeApod} />
      ) : null}

      {!blankDisplayMars ? (
        marsData.photos ? (
          <MarsHome marsData={marsData.photos} />
        ) : null
      ) : null}
    </div>
  );
};

export default App;

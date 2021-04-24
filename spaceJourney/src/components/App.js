import React from "react";
import axios from "axios";
import APODHome from "./APODHome";
import MarsHome from "./MarsHome";
import { Button, Modal } from "react-bootstrap";
import ImageModal from "./ImageModal";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      marsData: [],
      setModalShow: false,
      blankDisplayApod: true,
      blankDisplayMars: true,
    };
    // bind methods here
    this.getAllPics = this.getAllPics.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.newUser = this.newUser.bind(this);
    this.takeMeHomeApod = this.takeMeHomeApod.bind(this);
    this.takeMeHomeMars = this.takeMeHomeMars.bind(this);
    this.marsRover = this.marsRover.bind(this);
  }

  // create methods here
  getAllPics() {
    axios
      .get("/photos")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log("ERROR ON FRONT: ", err));
    this.takeMeHomeApod();
  }

  handleModal() {
    this.setState({
      setModalShow: !this.state.setModalShow,
    });
  }

  newUser(userInfo) {
    axios
      .post("/user", userInfo)
      .then((res) => alert("Thanks for Joining!"))
      .catch((err) => console.log("ERROR WITH POST REQUEST: ", err));
  }

  takeMeHomeApod() {
    this.setState({
      blankDisplayApod: !this.state.blankDisplayApod,
    });
  }

  takeMeHomeMars() {
    this.setState({
      blankDisplayMars: !this.state.blankDisplayMars,
    });
  }

  marsRover() {
    axios
      .get("/mars")
      .then((res) => {
        this.setState({ marsData: res.data });
      })
      .catch((err) => console.log("ERROR WITH POST REQUEST: ", err));
    this.takeMeHomeMars();
  }

  render() {
    return (
      <div>
        {this.state.blankDisplayApod ? (
          <Button
            className="journeyButton"
            variant="primary"
            onClick={this.getAllPics}
          >
            Picture Of The Day!
          </Button>
        ) : (
          <Button
            className="findMeButton"
            variant="dark"
            onClick={this.takeMeHomeApod}
          >
            Let's Go Home
          </Button>
        )}
        <Button
          className="joinUsButton"
          variant="primary"
          onClick={this.handleModal}
        >
          Join Us
        </Button>

        {this.state.blankDisplayMars ? (
          <Button
            className="browseNasaButton"
            variant="primary"
            onClick={this.marsRover}
          >
            Mars Rover Pictures
          </Button>
        ) : (
          <Button
            className="browseNasaButton"
            variant="dark"
            onClick={this.takeMeHomeMars}
          >
            Let's Go Home
          </Button>
        )}

        <ImageModal
          newUser={this.newUser}
          show={this.state.setModalShow}
          onHide={this.handleModal}
        />

        {!this.state.blankDisplayApod ? (
          <APODHome allData={this.state.data} onClick={this.takeMeHomeApod} />
        ) : null}

        {!this.state.blankDisplayMars ? (
          this.state.marsData.photos ? (
            <MarsHome marsData={this.state.marsData.photos} />
          ) : null
        ) : null}
      </div>
    );
  }
}

export default App;

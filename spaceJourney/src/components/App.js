import React from "react";
import axios from "axios";
import Home from "./Home";
import { Button, Modal } from "react-bootstrap";
import ImageModal from "./ImageModal";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      setModalShow: false,
      blankDisplay: true,
      fullDisplay: false,
    };
    // bind methods here
    this.getAllPics = this.getAllPics.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.newUser = this.newUser.bind(this);
    this.takeMeHome = this.takeMeHome.bind(this);
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
    this.takeMeHome();
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

  takeMeHome() {
    this.setState({
      blankDisplay: !this.state.blankDisplay,
      fullDisplay: !this.state.fullDisplay,
    });
  }

  render() {
    return (
      <div>
        {this.state.blankDisplay ? (
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
            variant="primary"
            onClick={this.takeMeHome}
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

        <ImageModal
          newUser={this.newUser}
          show={this.state.setModalShow}
          onHide={this.handleModal}
        />
        {this.state.fullDisplay ? (
          <Home allData={this.state.data} onClick={this.takeMeHome} />
        ) : null}
      </div>
    );
  }
}

export default App;

import React from "react";
import axios from "axios";
import Home from "./Home";
import Photos from "./Photos";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    // bind methods here
    this.getAllPics = this.getAllPics.bind(this);
    this.sendHome = this.sendHome.bind(this);
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
  }

  sendHome() {
    console.log("WORKING!");
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.getAllPics}>
          Ready?
        </Button>
        <Home allData={this.state.data} />
        <Photos />
      </div>
    );
  }
}

export default App;

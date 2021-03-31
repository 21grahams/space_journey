import React from "react";
import axios from "axios";
import Home from "./Home";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    // bind methods here
    this.getAllPics = this.getAllPics.bind(this);
    this.favoritePic = this.favoritePic.bind(this);
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

  favoritePic() {
    console.log("WORKING!");
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.getAllPics}>
          Lets Go On A Journey!
        </Button>
        <Button className='saved' variant="contained" color="primary" onClick={this.favoritePic}>
          Save To The Collection!
        </Button>
        {/* <FavoriteIcon className='heart' color='secondary' fontSize='small'/> */}
        <Home allData={this.state.data} />
      </div>
    );
  }
}

export default App;

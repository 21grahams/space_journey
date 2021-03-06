import React from "react";
import { Image } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nameError: '',
      emailError: ''
    };
    // bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  // create methods here
  handleChange() {
    this.setState({ [event.target.name]: event.target.value });
  }

  validate() {
    let nameError = '';
    let emailError = '';

    if (!this.state.name) {
      nameError = 'name cannot be blank'
    }
    if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
      emailError = 'invalid email'
    }
    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    let nameError = '';
    let emailError = '';
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.newUser(this.state);
      this.setState({
        name: "",
        email: ""
      });
    }
    if (isValid) {
      this.props.onHide();
    }
  }

  reset() {
    this.props.onHide();
    this.setState({
      name: '',
      email: '',
      nameError: '',
      emailError: ''
    })
  }

  render() {
    const {newUser, ...rest} = this.props
    return (
      <Modal
        {...rest}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop='static'
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign Up To Receive Daily NASA Pictures
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <input
              name="name"
              value={this.state.name}
              placeholder="Add Name..."
              onChange={this.handleChange}
            />
              <div style={{color: 'red'}}>{this.state.nameError}</div>
          </label>
          <br></br>
          <label>
            <input
              name="email"
              value={this.state.email}
              placeholder="Add Email..."
              onChange={this.handleChange}
            />
            <div style={{color: 'red'}}>{this.state.emailError}</div>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={this.reset}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ImageModal;

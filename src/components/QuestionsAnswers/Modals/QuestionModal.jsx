import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderModal: false,
      body: "",
      name: "",
      email: ""
    };
  }

  handleChange(event, stateprop) {
    let stateObj = {};
    stateObj[stateprop] = event.target.value;
    this.setState(stateObj);
  }

  //Need to grab product id from redux store or url
  postQuestion(params) {
    let id = 4; ///PLACEHOLDER
    return Axios.post(`http://3.134.102.30/qa/${id}?`, params);
  }

  handleSubmit() {
    let questionObj = { ...this.state };
    delete questionObj.renderModal;
    this.postQuestion(questionObj)
      .then(res => console.log("response from post question", res))
      .catch(err => console.log("error from post question", err));
    this.props.onHide();
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Please enter info to submit new question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please Enter Email"
                onChange={event => this.handleChange(event, "email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type="nickname"
                placeholder="Please Enter Nickname"
                onChange={event => this.handleChange(event, "name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="question"
                placeholder="Please Enter Question"
                onChange={event => this.handleChange(event, "body")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleSubmit()}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default QuestionModal;

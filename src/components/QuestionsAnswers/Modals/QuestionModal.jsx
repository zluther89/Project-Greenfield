import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { connect } from "react-redux";
import { getQuestionsThunk } from "../../Redux/ThunkMiddleware.js";

const mapDispatchToProps = dispatch => {
  return {
    getQuestionsThunk: id => dispatch(getQuestionsThunk(id))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    questionSet: state.questionSet,
    onHide: ownProps.onHide
  };
};

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderModal: false,
      body: "",
      name: "",
      email: "",
      pictureUrls: [],
      url: ""
    };
  }

  handleChange(event, stateprop) {
    let stateObj = {};
    stateObj[stateprop] = event.target.value;
    this.setState(stateObj);
  }

  postAnswer() {
    //post answer to question id endpoint
  }

  addUrlSubmit() {
    let pictures = [...this.state.pictureUrls, this.state.url];
    this.setState({ pictureUrls: pictures });
  }

  //Need to grab product id from redux store or url
  postQuestion(params) {
    let id = 4; ///PLACEHOLDER CHANGE TO ID OF PRODUCT
    return Axios.post(`http://3.134.102.30/qa/${id}?`, params);
  }

  handleSubmit() {
    let id = "4"; ///PLACEHOLDER CHANGE TO ID OF PRODUCT
    let questionObj = { ...this.state };
    delete questionObj.renderModal;
    delete questionObj.pictureUrls;
    delete questionObj.url;
    this.postQuestion(questionObj)
      .then(() => this.props.getQuestionsThunk(id))
      .then(res => console.log("response from post question", res))
      .catch(err => console.log("error from post question", err));

    this.props.onHide();
    setTimeout(() => console.log(this.props), 2000);
  }

  render() {
    //     A button will appear allowing users to upload their photos to the form.  Up to five photos should be allowed for each answer.
    // Clicking the button should open a separate window where the photo to be can be selected.
    // After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
    let pictures = this.state.pictureUrls.map((pictureUrl, index) => {
      return (
        <div key={index}>
          <img src={pictureUrl} alt="invalid url" />
        </div>
      );
    });

    let addPictureButton =
      this.state.pictureUrls.length < 5 ? (
        <Button onClick={() => this.addUrlSubmit()}>Add Picture</Button>
      ) : null;

    let picturesForm =
      this.props.type === "answer" ? (
        <Form.Group>
          <div className="picturesContainer">{pictures}</div>
          <Form.Label>Pictures</Form.Label>
          <Form.Control
            type="pictureUrl"
            placeholder="Please submit URL of picture to add"
            onChange={event => this.handleChange(event, "url")}
          />
          {addPictureButton}
        </Form.Group>
      ) : null;

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
            {picturesForm}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleSubmit()}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal);

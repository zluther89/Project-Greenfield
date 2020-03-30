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
    onHide: ownProps.onHide,
    questionID: ownProps.questionID
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
      files: [],
      filePreview: []
    };
  }

  //button handlers
  handleSelectFile(event) {
    let newfiles = [...this.state.files, event.target.files[0]];
    let newfilePreviewState = [
      ...this.state.filePreview,
      URL.createObjectURL(event.target.files[0])
    ];
    this.setState({ files: newfiles });
    this.setState({ filePreview: newfilePreviewState });
  }

  handleChange(event, stateprop) {
    let stateObj = {};
    stateObj[stateprop] = event.target.value;
    this.setState(stateObj);
  }

  addUrlSubmit() {
    let pictures = [...this.state.pictureUrls, this.state.url];
    this.setState({ pictureUrls: pictures });
  }

  handleSubmit() {
    let prouctID = "2"; ///PLACEHOLDER CHANGE TO ID OF PRODUCT
    let questionObj = {
      body: this.state.body,
      email: this.state.email,
      name: this.state.name
    };
    this.postQuestion(questionObj)
      .then(() => this.props.getQuestionsThunk(prouctID))
      .then(res => console.log("response from post question", res))
      .catch(err => console.log("error from post question", err));

    this.props.onHide();
    setTimeout(() => console.log(this.props), 2000);
  }
  //Axios put requests
  postAnswer() {
    let id = this.props.questionID;
    //post answer to question id endpoint
  }
  //Need to grab product id from redux store or url
  postQuestion(params) {
    let productId = "2"; ///PLACEHOLDER CHANGE TO ID OF PRODUCT
    return Axios.post(`http://3.134.102.30/qa/${productId}?`, params);
  }

  render() {
    //     A button will appear allowing users to upload their photos to the form.  Up to five photos should be allowed for each answer.
    // Clicking the button should open a separate window where the photo to be can be selected.
    // After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

    let type = this.props.type === "answer" ? "answer" : "question";

    let picturesForm =
      this.props.type === "answer" ? (
        <Form.Group>
          <div className="picturesContainer">
            {this.state.filePreview.map(preview => {
              return <img className="pictures" src={preview} />;
            })}
          </div>
          <Form.Label>Pictures</Form.Label>
          <Form.File
            type="picture"
            placeholder="Please submit URL of picture to add"
            onChange={event => this.handleSelectFile(event)}
          />
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
            Please enter info to submit new {type}
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

// let picturesForm =
//   this.props.type === "answer" ? (
//     <Form.Group>
//       <div className="picturesContainer">{pictures}</div>
//       <Form.Label>Pictures</Form.Label>
//       <Form.Control
//         type="pictureUrl"
//         placeholder="Please submit URL of picture to add"
//         onChange={event => this.handleChange(event, "url")}
//       />
//       {addPictureButton}
//     </Form.Group>
//   ) : null;

// let pictures = this.state.pictureUrls.map((pictureUrl, index) => {
//   return (
//     <div key={index}>
//       <img src={pictureUrl} alt="invalid url" />
//     </div>
//   );
// });

// let addPictureButton =
//   this.state.files.length < 5 ? (
//     <Button onClick={() => this.addUrlSubmit()}>Add Picture</Button>
//   ) : null;

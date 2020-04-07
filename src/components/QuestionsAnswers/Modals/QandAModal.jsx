import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { connect } from "react-redux";
import { getQuestionsThunk } from "../../Redux/ThunkMiddleware.js";

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionsThunk: (id) => dispatch(getQuestionsThunk(id)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    questionSet: state.questionSet,
    selectedProduct: state.selectedProduct,
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
      filePreview: [],
    };
    this.postAnswer = this.postAnswer.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
  }

  //button handlers

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
    let type = this.props.type === "question" ? "Question" : "Answer";
    let productID = this.props.selectedProduct.id;
    let data = {
      body: this.state.body,
      email: this.state.email,
      name: this.state.name,
    };

    if (
      data.body &&
      data.email &&
      data.name &&
      data.email.indexOf("@") !== -1
    ) {
      let postHandler =
        this.props.type === "question" ? this.postQuestion : this.postAnswer;

      let updateHandler =
        this.props.type === "question"
          ? () => this.props.getQuestionsThunk(productID)
          : this.props.setAnswers;
      postHandler(data)
        .then((res) => console.log("response from post question", res))
        .then(updateHandler)
        .catch((err) => console.log("error from post question", err));

      this.props.onHide();
    } else {
      this.createWarningString(data, type);
    }
  }

  createWarningString(data, type) {
    let warningString;
    if (!data.body || !data.email || !data.name) {
      warningString = "You must enter the following:";
      warningString += !data.body ? ` ${type},` : "";
      warningString += !data.email ? " Email," : "";
      warningString += !data.name ? " Nickname," : "";
      warningString = warningString.slice(0, warningString.length - 1);
    }
    let warningStringTwo =
      data.email.indexOf("@") === -1 ||
      data.email.slice(data.email.indexOf("@")).indexOf(".") === -1
        ? "Please enter email in valid format"
        : "";
    this.setState({ warning: warningString, warningTwo: warningStringTwo });
  }

  postAnswer(data) {
    let questionID = this.props.questionID;
    return Axios.post(`http://18.224.200.47/qa/${questionID}/answers`, data);
  }

  postQuestion(params) {
    let productId = this.props.selectedProduct.id;
    return Axios.post(`http://18.224.200.47/qa/${productId}?`, params);
  }

  render() {
    let type = this.props.type === "answer" ? "Answer" : "Question";
    let nickNameAlert = this.state.name ? (
      <div>For privacy reasons, do not use your full name or email address</div>
    ) : null;

    let emailAlert = this.state.email ? (
      <div>For authentication reasons, you will not be emailed</div>
    ) : null;

    let header =
      this.props.type === "question" ? (
        <div>
          <div>
            <h2>Ask your question</h2>
          </div>
          <div>
            <h4>About the {this.props.selectedProduct.name}</h4>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2>Submit your answer</h2>
          </div>
          <div>
            <h4>
              {this.props.selectedProduct.name}:{" "}
              {this.props.question.question_body}
            </h4>
          </div>
        </div>
      );

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                maxLength="60"
                placeholder="Please Enter Email"
                onChange={(event) => this.handleChange(event, "email")}
              />
              {emailAlert}
            </Form.Group>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type="nickname"
                maxLength="60"
                placeholder="Example: jackson11!"
                onChange={(event) => this.handleChange(event, "name")}
              />
              {nickNameAlert}
            </Form.Group>
            <Form.Group>
              <Form.Label>{type}</Form.Label>
              <Form.Control
                type={type}
                as="textarea"
                maxLength="1000"
                placeholder={`Please Enter: ${type}`}
                onChange={(event) => this.handleChange(event, "body")}
              />
            </Form.Group>
            {this.state.warning ? this.state.warning : null} <br></br>
            {this.state.warningTwo}
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

// let picturesForm =
// this.props.type === "answer" ? (
//   <Form.Group>
//     <div className="picturesContainer">
//       {this.state.filePreview.map(preview => {
//         return <img className="pictures" src={preview} />;
//       })}
//     </div>
//     <Form.Label>Pictures</Form.Label>
//     <Form.File
//       type="picture"
//       placeholder="Please submit URL of picture to add"
//       onChange={event => this.handleSelectFile(event)}
//     />
//   </Form.Group>
// ) : null;

// handleSelectFile(event) {
//   let newfiles = [...this.state.files, event.target.files[0]];
//   let newfilePreviewState = [
//     ...this.state.filePreview,
//     URL.createObjectURL(event.target.files[0])
//   ];
//   this.setState({ files: newfiles });
//   this.setState({ filePreview: newfilePreviewState });
// }

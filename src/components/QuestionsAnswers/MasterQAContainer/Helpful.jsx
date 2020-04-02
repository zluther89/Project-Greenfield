import React from "react";
import QandAModalButton from "../Modals/QandAModalButton";
import Axios from "axios";
import { connect } from "react-redux";
import { getQuestionsThunk } from "../../Redux/ThunkMiddleware";

const mapDispatchToProps = dispatch => {
  return {
    getQuestionsThunk: id => dispatch(getQuestionsThunk(id))
  };
};

const mapStateToProps = state => ({
  questionSet: state.questionSet,
  numOfQuestions: state.numOfQuestions,
  selectedProduct: state.selectedProduct
});

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false, //useless
      reported: false,
      votes: null
    };
  }

  postHelpful(endpoint) {
    return Axios.put(`http://3.134.102.30/qa/${endpoint}/helpful`);
  }
  localVote() {
    let votes = this.props.helpful + 1;
    this.setState({ votes: votes });
  }
  handleReported() {
    this.setState({ reported: true });
  }

  setLocalStorageVote(key) {
    localStorage.setItem(key, true);
  }

  getLocalStorageItem(key) {
    return localStorage.getItem(key);
  }

  putHandler(type) {
    let productID = this.props.selectedProduct.id;
    let handler = type === "report" ? this.postReport : this.postHelpful;
    let id =
      this.props.type === "question"
        ? this.props.questionID
        : this.props.answerId;

    let endpoint =
      this.props.type === "question" ? "question/" + id : "answer/" + id;

    if (handler === this.postHelpful) {
      if (localStorage.getItem(endpoint) === "true") {
        return;
      }
    }

    let updateHandler =
      this.props.type === "question"
        ? () => this.props.getQuestionsThunk(productID)
        : () => this.props.setAnswers();
    updateHandler = type === "helpful" ? () => this.localVote() : updateHandler;

    updateHandler =
      type === "report" ? () => this.handleReported() : updateHandler;
    let localStorageVoteUpdate =
      type === "helpful"
        ? () => {
            this.setLocalStorageVote(endpoint);
          }
        : () => {};

    handler(endpoint)
      .then(res => {
        console.log(res);
      })
      .then(() => {
        updateHandler();
        localStorageVoteUpdate();
      })
      .catch(err => console.log(err));
  }

  postReport(endpoint) {
    return Axios.put(`http://3.134.102.30/qa/${endpoint}/report`);
  }

  render() {
    let report =
      this.state.reported === false ? (
        <div
          className="link"
          onClick={() => {
            this.putHandler("report");
          }}
        >
          Report
        </div>
      ) : (
        <div>
          <strong>Reported</strong>
        </div>
      );
    let answer =
      this.props.type === "question" ? (
        <>
          <QandAModalButton
            questionID={this.props.questionID}
            type="answer"
            setAnswers={this.props.setAnswers}
            question={this.props.question}
          />
          <div>|</div>
        </>
      ) : null;
    return (
      <>
        <div>Helpful?</div>
        <div className="link" onClick={() => this.putHandler("helpful")}>
          Yes
        </div>
        <div>({this.state.votes || this.props.helpful})</div> <div>|</div>
        {answer}
        {report}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Helpful);

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

const mapStateToProps = (state, ownProps) => {
  return {
    questionID: ownProps.questionID,
    type: ownProps.type,
    helpful: ownProps.helpful
  };
};

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false //useless
    };
  }

  postVote() {
    //vote and on success change hasvoted state to true
  }

  handleReport() {
    let id = 5; ///PLACEHOLDER CHANGE TO ID OF PRODUCT
    if (this.props.type === "question") {
      this.postReport(`question/${this.props.questionID}`)
        .then(res => {
          console.log(res);
        })
        .then(() => this.props.getQuestionsThunk(id))
        .then(console.log("reported"));
    } else if (this.props.type === "answer") {
      this.postReport(`answer/${this.props.answerId}`)
        .then(res => {
          console.log(res);
        })
        .then(() => this.props.setAnswers())
        .then(console.log("reported"));
    }
  }

  postReport(endpoint) {
    // /qa/answer/:answer_id/report
    return Axios.put(`http://3.134.102.30/qa/${endpoint}/report`);
  }

  render() {
    //note: placeholder, need to make functional
    let answerOrReport =
      this.props.type === "question" ? (
        <>
          <QandAModalButton questionID={this.props.questionID} type="answer" />
          <div>|</div>
        </>
      ) : null;
    return (
      <>
        <div>Helpful?</div>
        <div className="link">Yes</div>
        <div>({this.props.helpful})</div> <div>|</div>
        {answerOrReport}
        <div
          className="link"
          onClick={() => {
            this.handleReport();
          }}
        >
          Report
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Helpful);

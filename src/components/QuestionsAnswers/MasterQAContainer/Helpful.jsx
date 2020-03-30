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

// const mapStateToProps = (state, ownProps) => {
//   return {
//     questionID: ownProps.questionID,
//     type: ownProps.type,
//     helpful: ownProps.helpful
//   };
// };

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false //useless
    };
  }

  postHelpful(endpoint) {
    // /qa/question/:question_id/helpful
    // /qa/answer/:answer_id/helpful
    // Axios.put()
    //vote and on success change hasvoted state to true
  }

  handleReport() {
    let id = 5; ///PLACEHOLDER CHANGE TO ID OF PRODUCT
    let endpoint =
      this.props.type === "question"
        ? `question/${this.props.questionID}`
        : `answer/${this.props.answerId}`;
    let handler =
      this.props.type === "question"
        ? () => this.props.getQuestionsThunk(id)
        : () => this.props.setAnswers();

    this.postReport(endpoint)
      .then(res => {
        console.log(res);
      })
      .then(handler)
      .then(console.log("reported"))
      .catch(err => console.log(err));
  }

  postReport(endpoint) {
    return Axios.put(`http://3.134.102.30/qa/${endpoint}/report`);
  }

  render() {
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

export default connect(null, mapDispatchToProps)(Helpful);

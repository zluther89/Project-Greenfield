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

  componentDidMount() {
    console.log("prps from helpful", this.props);
  }

  postHelpful(endpoint) {
    // /qa/question/:question_id/helpful
    // /qa/answer/:answer_id/helpful
    // Axios.put()
    //vote and on success change hasvoted state to true
    return Axios.put(`http://3.134.102.30/qa/${endpoint}/helpful`);
  }

  putHandler(type) {
    let productID = "2"; ///PLACEHOLDER CHANGE TO ID OF PRODUCT'
    let handler = type === "report" ? this.postReport : this.postHelpful;
    let id =
      this.props.type === "question"
        ? this.props.questionID
        : this.props.answerId;
    let endpoint =
      this.props.type === "question" ? "question/" + id : "answer/" + id;
    let updateHandler =
      this.props.type === "question"
        ? () => this.props.getQuestionsThunk(productID)
        : () => this.props.setAnswers();
    handler(endpoint)
      .then(res => {
        console.log(res);
      })
      .then(updateHandler)
      .then(console.log("reported"))
      .catch(err => console.log(err));
  }

  postReport(endpoint) {
    return Axios.put(`http://3.134.102.30/qa/${endpoint}/report`);
  }

  render() {
    let answer =
      this.props.type === "question" ? (
        <>
          <QandAModalButton
            questionID={this.props.questionID}
            type="answer"
            setAnswers={this.props.setAnswers}
          />
          <div>|</div>
        </>
      ) : null;
    return (
      <>
        <div>Helpful?</div>
        <div className="link" onClick={() => this.putHandler("answer")}>
          Yes
        </div>
        <div>({this.props.helpful})</div> <div>|</div>
        {answer}
        <div
          className="link"
          onClick={() => {
            this.putHandler("report");
          }}
        >
          Report
        </div>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(Helpful);

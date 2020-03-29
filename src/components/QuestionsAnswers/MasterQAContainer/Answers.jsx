import React from "react";
import { connect } from "react-redux";
// import Axios from "axios";
import moment from "moment";
import Helpful from "./Helpful";

const mapStateToProps = (state, ownProps) => ({
  questionSet: state.questionSet,
  questionID: ownProps.questionID
});

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      numberToRender: 2
    };
  }

  sortAnswers(array) {
    let answers = array.slice(0);
    answers.sort((a, b) => (a.helpfulness > b.helpfulness ? -1 : 1));
    return answers;
  }

  moreAnswersClick() {
    let totalAnswers = this.props.answers.length;
    this.setState({ numberToRender: totalAnswers });
    this.props.expandHandler();
  }

  componentDidUpdate() {
    console.log("doc height", document.getElementById("test").clientHeight);
    console.log("window height", window.innerHeight);
  }

  componentDidMount() {
    console.log("doc height", document.getElementById("test").clientHeight);
    console.log("window height", window.innerHeight);
  }

  render() {
    //Note: for formatting reasons, answer 1 is hardcoded, the rest are conditionally rendered based on a number in state
    let answer1 = this.props.answers[0] ? this.props.answers[0].body : null;
    if (answer1 === null) {
      return null;
    }
    let additionalAnswers = this.props.answers
      .slice(1, this.state.numberToRender)
      .map(answer => {
        let date = moment(answer.date).format("MMMM Do YYYY");
        return (
          <>
            <tr key={answer.answer_id}>
              <td></td>
              <td>{answer.body}</td>
            </tr>
            <tr>
              <td></td>
              <td className="answererContainer">
                by {answer.answerer_name},{date}{" "}
                <Helpful helpful={answer.helpfulness} />
              </td>
            </tr>
          </>
        );
      });

    let moreAnswersLink =
      this.props.answers.length > 2 &&
      this.props.answers.length !== this.state.numberToRender ? (
        <div className="loadMoreAnswers">Load More Answers</div>
      ) : null;

    return (
      <>
        <tr key={answer1.answer_id}>
          <td>A:</td>
          <td>{answer1}</td>
        </tr>
        <tr>
          <td></td>
          <td className="answererContainer">
            by {answer1.answerer_name},
            {moment(answer1.date).format("MMMM Do YYYY")}{" "}
            <Helpful helpful={this.props.answers[0].helpfulness} />
          </td>
        </tr>
        {additionalAnswers}
        <tr>
          <td></td>
          <td onClick={() => this.moreAnswersClick()}>{moreAnswersLink}</td>
        </tr>
      </>
    );
  }
}

export default connect(mapStateToProps)(Answers);

// getAnswers(id) {
//   return Axios.get(`http://3.134.102.30/qa/${id}/answers`);
// }

// setAnswers(id) {
//   this.getAnswers(id).then(res => {
//     console.log("api answers", res.data.results);
//     // let sortedAnswers = this.sortAnswers(res.data.results);
//     // this.setState({ answers: sortedAnswers });
//   });
// }

// componentDidMount() {
//   console.log("aanswers from question", this.props.answers);
//   this.setAnswers(this.props.questionID);
// }

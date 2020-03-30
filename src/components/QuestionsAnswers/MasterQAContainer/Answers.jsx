import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
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
    this.setAnswers = this.setAnswers.bind(this);
  }

  getAnswers(id) {
    return Axios.get(`http://3.134.102.30/qa/${id}/answers`);
  }

  setAnswers() {
    console.log(this.props.questionID);
    this.getAnswers(this.props.questionID).then(res => {
      console.log("api answers", res.data.results);
      let sortedAnswers = this.sortAnswers(res.data.results);
      this.setState({ answers: sortedAnswers });
    });
  }

  componentDidMount() {
    console.log("aanswers from question", this.state.answers);
    this.setAnswers(this.props.questionID);
  }

  sortAnswers(array) {
    let answers = array.slice(0);
    answers.sort((a, b) => (a.helpfulness > b.helpfulness ? -1 : 1));
    return answers;
  }

  moreAnswersClick() {
    let totalAnswers = this.state.answers.length;
    this.setState({ numberToRender: totalAnswers });
    this.props.expandHandler();
  }

  render() {
    //Note: for formatting reasons, answer 1 is hardcoded, the rest are conditionally rendered based on a number in state

    //CLEAN UP
    let answers = this.state.answers
      .slice(0, this.state.numberToRender)
      .map((answer, index) => {
        let date = moment(answer.date).format("MMMM Do YYYY");
        let title = index === 0 ? "A:" : null;
        return (
          <>
            <tr key={answer.answer_id}>
              <td>{title}</td>
              <td>{answer.body}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="answererContainer">
                  <div>
                    by {answer.answerer_name}, <div>{date} </div>
                  </div>
                  <Helpful
                    answerId={answer.answer_id}
                    helpful={answer.helpfulness}
                    type="answer"
                    setAnswers={this.setAnswers}
                  />
                </div>
              </td>
            </tr>
          </>
        );
      });

    let moreAnswersLink =
      this.state.answers.length > 2 &&
      this.state.answers.length !== this.state.numberToRender ? (
        <div className="loadMoreAnswers">Load More Answers</div>
      ) : null;

    return (
      <>
        {answers}
        <tr>
          <td></td>
          <td onClick={() => this.moreAnswersClick()}>{moreAnswersLink}</td>
        </tr>
      </>
    );
  }
}

export default connect(mapStateToProps)(Answers);

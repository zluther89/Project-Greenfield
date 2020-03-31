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
  }

  moreAnswersClick() {
    let totalAnswers = this.props.answers.length;
    this.setState({ numberToRender: totalAnswers });
    this.props.expandHandler();
  }

  render() {
    let answers = this.props.answers
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
                    {" "}
                    by {answer.answerer_name}, {date}
                  </div>
                  <Helpful
                    question={this.props.question}
                    answerId={answer.answer_id}
                    helpful={answer.helpfulness}
                    type="answer"
                    setAnswers={this.props.setAnswers}
                  />
                </div>
              </td>
            </tr>
          </>
        );
      });

    let moreAnswersLink =
      this.props.answers.length > 2 &&
      this.props.answers.length > this.state.numberToRender ? (
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

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
      numberToRender: 2,
      expandedAnswers: false
    };
  }

  toggleAnswers() {
    let totalAnswers =
      this.state.numberToRender === this.props.answers.length
        ? 2
        : this.props.answers.length;
    let toggleExpand = this.state.expandedAnswers === true ? false : true;
    this.setState({
      numberToRender: totalAnswers,
      expandedAnswers: toggleExpand
    });
    this.props.expandHandler();
  }

  render() {
    let answers = this.props.answers
      .slice(0, this.state.numberToRender)
      .map((answer, index) => {
        let date = moment(answer.date).format("MMMM Do YYYY");
        let title = index === 0 ? "A:" : null;
        let answererName =
          answer.answerer_name === "Seller" ? (
            <strong>Seller</strong>
          ) : (
            answer.answerer_name
          );
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
                  <div></div>
                  <div>by</div>
                  <div> {answererName},</div>
                  <div> {date}</div>
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
        <div className="ToggleAnswers">Load More Answers</div>
      ) : null;

    let collapseAnswersLink =
      this.state.expandedAnswers === true ? (
        <div className="ToggleAnswers">Collapse answers</div>
      ) : null;

    // When expanded, the button to “See more answers” should change to read “Collapse answers”.

    return (
      <>
        {answers}
        <tr>
          <td></td>
          <td onClick={() => this.toggleAnswers()}>
            {moreAnswersLink}
            {collapseAnswersLink}
          </td>
        </tr>
      </>
    );
  }
}

export default connect(mapStateToProps)(Answers);

import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Question from "./Question.jsx";

const mapStateToProps = state => ({
  questionSet: state.questionSet,
  numOfQuestions: state.numOfQuestions
});

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sortQuestionsReturn() {
    //change to filtered questions if exists
    let questionSet =
      this.props.searched === true
        ? this.props.filteredQuestions
        : this.props.questionSet;
    let questions = questionSet.slice(0);
    questions.sort((a, b) =>
      a.question_helpfulness > b.question_helpfulness ? -1 : 1
    );

    return questions;
  }

  render() {
    let loadedSortedQs = this.sortQuestionsReturn().slice(
      0,
      this.props.numOfQuestions
    );

    return (
      <div>
        <div id="select">
          <table>
            {loadedSortedQs.map(question => {
              return (
                <tr>
                  <Question key={question.question_id} q={question} />{" "}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionsContainer);

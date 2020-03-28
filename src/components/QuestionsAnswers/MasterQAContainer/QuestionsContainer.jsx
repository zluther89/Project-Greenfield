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
    let questions = this.props.questionSet.slice(0);
    questions.sort((a, b) =>
      a.question_helpfulness > b.question_helpfulness ? -1 : 1
    );

    return questions;
  }

  render() {
    let styles = {
      height: "200px",
      width: "100%",
      overflowY: "scroll"
    };

    let loadedSortedQs = this.sortQuestionsReturn().slice(
      0,
      this.props.numOfQuestions
    );

    return (
      <div>
        <div style={styles}>
          <Table borderless>
            {loadedSortedQs.map(question => {
              return <Question key={question.question_id} q={question} />;
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionsContainer);

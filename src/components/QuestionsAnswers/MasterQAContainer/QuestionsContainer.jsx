import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Question from "./Question.jsx";

const mapStateToProps = state => ({
  questionSet: state.questionSet
});

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLoaded: 2
    };
  }

  setLoadedQuestions(numberToLoad = this.state.numberOfLoaded) {
    let sortedQArray = this.sortQuestionsReturn().slice(0, numberToLoad);
    this.setState({ loadedQuestions: sortedQArray });
  }

  sortQuestionsReturn() {
    let questions = this.props.questionSet.slice(0);
    questions.sort((a, b) =>
      a.question_helpfulness > b.question_helpfulness ? 1 : -1
    );

    return questions;
  }
  //load questions into state
  //load two most heplful by default into currentQuestions container
  //already have all questions in redux state

  //render each IndividualQuestion container with loaded questions

  //note. each question has answer children

  render() {
    let loadedQuestions = this.sortQuestionsReturn().slice(
      0,
      this.state.numberOfLoaded
    );

    return (
      <div>
        <Table borderless responsive>
          {loadedQuestions.map(question => {
            return <Question q={question} />;
          })}
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionsContainer);

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
      loadedQuestions: []
    };
  }

  //load questions into state
  //load two most heplful by default into currentQuestions container
  //already have all questions in redux state

  //render each IndividualQuestion container with loaded questions

  //note. each question has answer children

  render() {
    return (
      <div>
        <Table borderless responsive>
          <Question />
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionsContainer);

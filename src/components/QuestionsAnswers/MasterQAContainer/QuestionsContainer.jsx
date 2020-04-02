import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Question from "./Question.jsx";

const mapStateToProps = state => ({
  questionSet: state.questionSet,
  numOfQuestions: state.numOfQuestions
});

const QuestionsContainer = props => {
  const sortQuestionsReturn = () => {
    //change to filtered questions if exists
    let questionSet =
      props.searched === true ? props.filteredQuestions : props.questionSet;
    let questions = questionSet.slice(0);
    questions.sort((a, b) =>
      a.question_helpfulness > b.question_helpfulness ? -1 : 1
    );

    return questions;
  };

  let loadedSortedQs = sortQuestionsReturn().slice(0, props.numOfQuestions);

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
};

export default connect(mapStateToProps)(QuestionsContainer);

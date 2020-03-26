import React from "react";
import QuestionsContainer from "./MasterQAContainer/QuestionsContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import {
  setNewQuestion,
  setNewNumOfQuestions
} from "../Redux/ActionCreators.js";
import Axios from "axios";
import QuestionModalButton from "./Modals/QuestionModalButton.jsx";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

// import { setNewAnswer } from "../Redux/ActionCreators.js";

const mapDispatchToProps = dispatch => {
  return {
    setNewQuestion: questionObj => dispatch(setNewQuestion(questionObj)),
    setNewNumOfQuestions: number => dispatch(setNewNumOfQuestions(number))
    // setNewAnswer: answerList => dispatch(setNewAnswer(answerList))
  };
};

const mapStateToProps = state => ({
  questionSet: state.questionSet,
  numOfQuestions: state.numOfQuestions
});

class QuestionAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setNewQuestion("4");
  }

  getQuestions(id) {
    return Axios.get(`http://3.134.102.30/qa/${id}?count=10000000`);
  }

  setNewQuestion(id) {
    this.getQuestions(id).then(res =>
      this.props.setNewQuestion(res.data.results)
    );
  }

  clickHandler(numberOfQuestions) {
    let totalQuestions =
      this.props.questionSet.length > 2 ? this.props.questionSet.length : 2;
    let newNumOfQuestions =
      this.props.numOfQuestions === 2 ? totalQuestions : 2;
    this.props.setNewNumOfQuestions(newNumOfQuestions);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div></div>
        <Container>
          {" "}
          <SearchBar /> <QuestionsContainer />
          <Button onClick={() => this.clickHandler()}>
            More Answered Questions
          </Button>
          <QuestionModalButton />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswers);

import React from "react";
import QuestionsContainer from "./MasterQAContainer/QuestionsContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import { getQuestionsThunk } from "../Redux/ThunkMiddleware.js";
import {
  setNewQuestion,
  setNewNumOfQuestions
} from "../Redux/ActionCreators.js";
import Axios from "axios";
import QuestionModalButton from "./Modals/QuestionModalButton.jsx";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

const mapDispatchToProps = dispatch => {
  return {
    setNewQuestion: questionObj => dispatch(setNewQuestion(questionObj)),
    setNewNumOfQuestions: number => dispatch(setNewNumOfQuestions(number)),
    getQuestionsThunk: id => dispatch(getQuestionsThunk(id))
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
    this.props.getQuestionsThunk("4");
  }

  // getQuestions(id) {
  //   return Axios.get(`http://3.134.102.30/qa/${id}?count=10000000`);
  // }

  // setNewQuestion(id) {
  //   this.getQuestions(id).then(res =>
  //     this.props.setNewQuestion(res.data.results)
  //   );
  // }

  clickHandler() {
    let newNumOfQuestions = this.props.numOfQuestions + 2;
    newNumOfQuestions =
      newNumOfQuestions > this.props.questionSet.length
        ? this.props.questionSet.length
        : newNumOfQuestions;

    this.props.setNewNumOfQuestions(newNumOfQuestions);
  }

  render() {
    let button =
      this.props.numOfQuestions === this.props.questionSet.length ? null : (
        <Button onClick={() => this.clickHandler()}>
          More Answered Questions
        </Button>
      );
    return (
      <div>
        <div></div>
        <Container>
          {" "}
          <SearchBar /> <QuestionsContainer />
          {button}
          <QuestionModalButton />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswers);

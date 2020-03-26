import React from "react";
import QuestionsContainer from "./MasterQAContainer/QuestionsContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import { setNewQuestion } from "../Redux/ActionCreators.js";
import Axios from "axios";
import QuestionModalButton from "./Modals/QuestionModalButton.jsx";
import { connect } from "react-redux";
// import { setNewAnswer } from "../Redux/ActionCreators.js";

const mapDispatchToProps = dispatch => {
  return {
    setNewQuestion: questionObj => dispatch(setNewQuestion(questionObj))
    // setNewAnswer: answerList => dispatch(setNewAnswer(answerList))
  };
};

const mapStateToProps = state => ({
  questionSet: state.questionSet
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

  render() {
    return (
      <div>
        <div></div>
        <Container>
          {" "}
          <SearchBar /> <QuestionsContainer />
          <button variant="primary">More Answered Questions</button>
          <QuestionModalButton />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswers);

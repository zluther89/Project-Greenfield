import React from "react";
import Questions from "./MasterQAContainer/Questions.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import { setNewQuestion } from "../Redux/ActionCreators.js";
import Axios from "axios";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    setNewQuestion: questionObj => dispatch(setNewQuestion(questionObj))
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
    this.getQuestions("1");
    this.setNewQuestion();
    setTimeout(() => console.log(this.props), 500);
  }

  getQuestions(id) {
    return Axios.get(`http://3.134.102.30/qa/${id}?count=10000000`);
  }

  setNewQuestion() {
    this.getQuestions("1").then(res => this.props.setNewQuestion(res.data));
  }

  render() {
    return (
      <div>
        <div></div>
        <Container>
          {" "}
          <SearchBar /> <Questions />
          <button variant="primary">More Answered Questions</button>
          <button variant="primary">Add A question +</button>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswers);

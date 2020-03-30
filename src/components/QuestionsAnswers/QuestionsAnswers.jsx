import React from "react";
import QuestionsContainer from "./MasterQAContainer/QuestionsContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import { setNewNumOfQuestions } from "../Redux/ActionCreators.js";
import Axios from "axios";
import QandAModalButton from "./Modals/QandAModalButton.jsx";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { getQuestionsThunk } from "../Redux/ThunkMiddleware.js";

const mapDispatchToProps = dispatch => {
  return {
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
    this.state = {
      style: {
        height: `250px`,
        overflowY: "scroll"
      }
    };
  }

  componentDidMount() {
    this.props.getQuestionsThunk("4");
  }

  clickHandler() {
    let newNumOfQuestions = this.props.numOfQuestions + 2;
    newNumOfQuestions =
      newNumOfQuestions > this.props.questionSet.length
        ? this.props.questionSet.length
        : newNumOfQuestions;

    this.props.setNewNumOfQuestions(newNumOfQuestions);
    //set new style on expan
    let styles = {
      maxHeight: `${window.innerHeight * 0.8}px`,
      overflowY: "scroll"
    };
    this.setState({ style: styles });
  }

  render() {
    let styles = {
      maxHeight: `${window.innerHeight * 0.8}px`,
      overflowY: "scroll"
    };

    let button =
      this.props.numOfQuestions === this.props.questionSet.length ? null : (
        <Button className="QnAButton" onClick={() => this.clickHandler()}>
          More Answered Questions
        </Button>
      );
    return (
      <div>
        <Container>
          <SearchBar />
          <div
            style={this.state.style}
            id="masterQContainer"
            className="masterQContainer"
          >
            <Container>
              {" "}
              <QuestionsContainer />
            </Container>
          </div>
          {button}
          <QandAModalButton type="question" />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswers);

import React from "react";
import QuestionsContainer from "./MasterQAContainer/QuestionsContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import { setNewNumOfQuestions } from "../Redux/ActionCreators.js";
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
  numOfQuestions: state.numOfQuestions,
  selectedProduct: state.selectedProduct
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
    let productId = "2"; //PLACEHOLDER
    this.props.getQuestionsThunk(productId);
  }

  clickHandler() {
    let newNumOfQuestions = this.props.numOfQuestions + 2;
    newNumOfQuestions =
      newNumOfQuestions > this.props.questionSet.length
        ? this.props.questionSet.length
        : newNumOfQuestions;

    this.props.setNewNumOfQuestions(newNumOfQuestions);
    //set new style on expand
    let styles = {
      maxHeight: `${window.innerHeight * 0.8}px`,
      overflowY: "scroll"
    };
    this.setState({ style: styles });
  }

  render() {
    // let styles = {
    //   maxHeight: `${window.innerHeight * 0.8}px`,
    //   overflowY: "scroll"
    // };

    let button =
      this.props.numOfQuestions === this.props.questionSet.length ||
      this.props.questionSet.length === 0 ? null : (
        <Button className="QnAButton" onClick={() => this.clickHandler()}>
          More Answered Questions
        </Button>
      );
    return (
      <div className="masterQnAContaier">
        <Container>
          <SearchBar />
          <div style={this.state.style}>
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

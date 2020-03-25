import React from "react";
import Questions from "./MasterQAContainer/Questions.jsx";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class QuestionAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default QuestionAnswers;

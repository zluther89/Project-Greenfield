import React from "react";
import Questions from "./MasterQAContainer/Questions.jsx";
import SearchBar from "./SearchBar.jsx";

class QuestionAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div>
          <Questions />
        </div>
        <div>
          <button variant="primary">More Answered Questions</button>{" "}
          <button variant="primary">Add A question</button>
        </div>
      </div>
    );
  }
}

export default QuestionAnswers;

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
          <SearchBar />
        </div>
        <div>
          <Questions />
        </div>
        <button>More Answered Questions</button>
        <button>Add A question</button>
      </div>
    );
  }
}

export default QuestionAnswers;

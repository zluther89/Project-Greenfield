import React from "react";
import Answers from "./Answers";
import Helpful from "./Helpful";
import AnswerModalButton from "../Modals/AnswerModalButton";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: []
    };
  }

  //get question from props
  //render question and answer as child component

  render() {
    let questionID = this.props.q.question_id;
    return (
      <tbody>
        <tr>
          <td>Q:</td>
          <td>
            {this.props.q.question_body}
            <div className="helpfulContainer">
              <Helpful type="answer" />
            </div>
          </td>
        </tr>
        <Answers questionID={questionID} />
      </tbody>
    );
  }
}

export default Question;

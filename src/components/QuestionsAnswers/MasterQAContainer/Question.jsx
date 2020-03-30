import React from "react";
import Answers from "./Answers";
import Helpful from "./Helpful";
import { render } from "@testing-library/react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: null
    };
  }

  expandComponent() {
    let newHeight = window.innerHeight * 0.5;
    let newStyles = {
      maxHeight: `${newHeight}px`,
      overflowY: "scroll"
    };
    this.setState({ style: newStyles });
  }

  render() {
    let answers = [];
    for (let key in this.props.q.answers) {
      answers.push(this.props.q.answers[key]);
    }
    let questionID = this.props.q.question_id;
    return (
      <div style={this.state.style} id="test">
        <tbody>
          <tr>
            <td>Q:</td>
            <td>{this.props.q.question_body}</td>
            <td>
              <div className="helpfulContainer">
                <Helpful
                  className="helpfulContainer"
                  questionID={questionID}
                  helpful={this.props.q.question_helpfulness}
                  type="question"
                />
              </div>
            </td>
          </tr>
          <Answers
            expandHandler={() => {
              this.expandComponent();
            }}
            answers={answers}
            key={questionID}
          />
        </tbody>
      </div>
    );
  }
}

export default Question;

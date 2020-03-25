import React from "react";
import Answers from "./Answers";

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
    return (
      <tbody>
        <tr>
          <td>Q:</td>
          <td>This is a question??</td>
        </tr>
        <Answers />
      </tbody>
    );
  }
}

export default Question;

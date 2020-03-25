import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: []
    };
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>Q:</td>
          <td>This is a question??</td>
        </tr>
        <tr>
          <td>A:</td>
          <td>This is an answer!</td>
          <td>Test</td>
        </tr>
        <tr>
          <td></td>
          <td>This is another answer!!!! ANSWER</td>
        </tr>
      </tbody>
    );
  }
}

export default Question;

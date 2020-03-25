import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  questionSet: state.questionSet
});

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {}
    };
  }

  getAnswers() {}

  setAnswers() {}

  componentDidMount() {}

  render() {
    return (
      <>
        <tr>
          <td>A:</td>
          <td>This is an answer!</td>
          <td>Test</td>
        </tr>
        <tr>
          <td></td>
          <td>This is another answer!!!! ANSWER</td>
        </tr>
      </>
    );
  }
}

export default connect(mapStateToProps)(Answers);

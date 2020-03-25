import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  questionSet: state.questionSet
});

class Answer extends React.Component {
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
    return <div>Answer</div>;
  }
}

export default connect(mapStateToProps)(Answer);

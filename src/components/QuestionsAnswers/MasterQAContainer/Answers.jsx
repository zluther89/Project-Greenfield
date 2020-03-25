import React from "react";
import { connect } from "react-redux";
import Axios from "axios";

const mapStateToProps = state => ({
  questionSet: state.questionSet
});

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      numberToRender: 2
    };
  }

  getAnswers(id) {
    return Axios.get(`http://3.134.102.30/qa/${id}/answers`);
  }

  setAnswers(id) {
    this.getAnswers(id).then(res => {
      this.setState({ answers: res.data.results }, () => {
        console.log("answers state", this.state);
      });
    });
  }

  componentDidMount() {
    this.setAnswers(this.props.questionID);
  }

  render() {
    //Note: for formatting reasons, answer 1 is hardcoded, the rest are conditionally rendered based on a number in state
    let answer1 = this.state.answers[0] ? this.state.answers[0].body : null;
    let additionalAnswers = this.state.answers
      .slice(1, this.state.numberToRender)
      .map(answer => {
        return (
          <tr key={answer.answer_id}>
            <td></td>
            <td>{answer.body}</td>
          </tr>
        );
      });
    return (
      <>
        <tr>
          <td>A:</td>
          <td>{answer1}</td>
        </tr>
        {additionalAnswers}
      </>
    );
  }
}

export default connect(mapStateToProps)(Answers);

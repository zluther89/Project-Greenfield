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
      answers: []
    };
  }

  getAnswers(id) {
    return Axios.get(`http://3.134.102.30/qa/${id}/answers`);
  }

  setAnswers(id) {
    this.getAnswers(id).then(res =>
      this.setState({ answers: res.data.results })
    );
  }

  componentDidMount() {
    this.setAnswers("3");
  }

  render() {
    console.log("answers props", this.props);
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

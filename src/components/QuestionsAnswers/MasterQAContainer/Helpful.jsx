import React from "react";

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  }

  postVote() {}

  render() {
    //note: placeholder, need to make functional
    let answerOrReport = this.props.type === "answer" ? "Add Answer" : "Report";
    return (
      <>
        <div>Helpful?</div>
        <div className="link">Yes</div>
        <div>({this.state.votes})</div> <div>|</div>
        <div>{answerOrReport}</div>
      </>
    );
  }
}

export default Helpful;

import React from "react";
import QandAModalButton from "../Modals/QandAModalButton";

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false //useless
    };
  }

  postVote() {
    //vote and on success change hasvoted state to true
  }

  render() {
    //note: placeholder, need to make functional
    let answerOrReport =
      this.props.type === "answer" ? (
        <div>
          <QandAModalButton type="answer" />{" "}
        </div>
      ) : (
        "Report"
      );
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

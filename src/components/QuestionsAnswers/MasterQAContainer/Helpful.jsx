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
    return (
      <div className="helpfulContainer">
        <div>Helpful?</div>
        <div className="link">Yes</div>
        <div>({this.state.votes})</div> <div>|</div>
        <div>Add Answer</div>
      </div>
    );
  }
}

export default Helpful;

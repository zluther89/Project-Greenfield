import React from "react";
import Banner from "./Banner";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="overview">
        <Banner />
      </div>
    );
  }
}

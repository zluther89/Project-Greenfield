import React from "react";

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.data.slogan}</h3>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

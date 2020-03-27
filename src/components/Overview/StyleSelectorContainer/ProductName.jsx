import React from "react";

export default class ProductName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Category: {this.props.category}</p>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

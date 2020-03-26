import React from "react";

export default class ProductName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>{this.props.category}</p>
        <h3>{this.props.name}</h3>
        <p>${this.props.price}</p>
      </div>
    );
  }
}

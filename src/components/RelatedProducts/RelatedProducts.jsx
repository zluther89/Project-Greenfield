import React from "react";

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <div>
        <img></img>
        <div>Category</div>
        <div>Product Name</div>
        <div>Price</div>
        <div>Stars</div>
      </div>
    </div>)
  }
}

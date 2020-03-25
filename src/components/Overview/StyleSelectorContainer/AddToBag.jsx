import React from "react";
import Button from "react-bootstrap/Button";

export default class AddToBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {" "}
        <Button id="button-add-to-bag">ADD TO BAG</Button>
      </div>
    );
  }
}

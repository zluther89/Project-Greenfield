import React from "react";

export default class SizeQuantitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {" "}
          <div class="col-xs-7 col-sm-7 col-md-7">SElECT SIZE DD</div>
          <div class="col-xs-5 col-sm-5 col-md-5">SELECT QUANT DD</div>
        </div>
      </div>
    );
  }
}

import React from "react";
import ProductDescription from "./ProductDescription";
import ProductTraits from "./ProductTraits";

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid productInfoBox">
        <div className="row">
          {" "}
          <div class="col-xs-7 col-sm-7 col-md-7 productDescriptionBox">
            <ProductDescription data={this.props.data} />
          </div>
          <div class="col-xs-5 col-sm-5 col-md-5">
            <ProductTraits data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

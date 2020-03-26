import React from "react";
import ProductReviews from "./ProductReviews";
import ProductName from "./ProductName";
import StyleSelect from "./StyleSelect";
import SizeQuantitySelect from "./SizeQuantitySelect";
import AddToBag from "./AddToBag";
import StyleTest from "./StyleTest";

export default class StyleSelectorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="styleSelectorContainer">
        <div className="productReviews">
          {" "}
          <ProductReviews />
        </div>
        <div className="productName">
          {" "}
          <ProductName
            name={this.props.data.name}
            category={this.props.data.category}
            price={this.props.data.default_price}
          />
        </div>
        <div className="styleSelect">
          {" "}
          <StyleTest styleData={this.props.styleData} />
        </div>
        <div className="sizeQuantitySelect">
          {" "}
          <SizeQuantitySelect styleData={this.props.styleData} />
        </div>
        <div className="addToBag">
          {" "}
          <AddToBag styleData={this.props.styleData} />
        </div>
      </div>
    );
  }
}

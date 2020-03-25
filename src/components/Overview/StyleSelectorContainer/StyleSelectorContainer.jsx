import React from "react";
import ProductReviews from "./ProductReviews";
import ProductName from "./ProductName";
import StyleSelect from "./StyleSelect";
import SizeQuantitySelect from "./SizeQuantitySelect";
import AddToBag from "./AddToBag";

export default class StyleSelectorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="styleSelectorContainer">
        <div class="productReviews">
          {" "}
          <ProductReviews />
        </div>
        <div className="productName">
          {" "}
          <ProductName />
        </div>
        <div className="styleSelect">
          {" "}
          <StyleSelect />
        </div>
        <div className="sizeQuantitySelect">
          {" "}
          <SizeQuantitySelect />
        </div>
        <div className="addToBag">
          {" "}
          <AddToBag />
        </div>
      </div>
    );
  }
}

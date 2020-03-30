import React from "react";
import ProductReviews from "./ProductReviews";
import ProductName from "./ProductName";
import SizeQuantitySelect from "./SizeQuantitySelect";
import AddToBag from "./AddToBag";
import StyleTest from "./StyleTest";
import SocialLinks from "./SoicalLinks";

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
          <p>Product Review</p>
          {/* <ProductReviews /> */}
        </div>
        <div className="productName">
          {" "}
          <ProductName
            name={this.props.data.name}
            category={this.props.data.category}
            price={this.props.data.default_price}
            currentStyle={this.props.currentStyle}
          />
        </div>
        <div className="styleSelect">
          {" "}
          <StyleTest
            styleData={this.props.styleData}
            switchStyle={this.props.switchStyle}
            price={this.props.price}
            salePrice={this.props.salePrice}
          />
        </div>
        <div className="sizeQuantitySelect">
          {" "}
          <SizeQuantitySelect
            styleData={this.props.styleData}
            currentStyle={this.props.currentStyle}
            styleClicked={this.props.styleClicked}
          />
        </div>
        <div class="socialLinks">
          <SocialLinks />
        </div>
      </div>
    );
  }
}

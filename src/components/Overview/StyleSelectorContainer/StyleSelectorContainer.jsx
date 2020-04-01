import React from "react";
import ProductReviews from "./ProductReviews";
import ProductName from "./ProductName";
import SizeQuantitySelect from "./SizeQuantitySelect";

import StyleTest from "./StyleTest";
import SocialLinks from "./SoicalLinks";

export default function StyleSelectorContainer(props) {
  return (
    <div className="styleSelectorContainer">
      <div className="productReviews">
        {" "}
        <ProductReviews />
      </div>
      <div className="productName">
        {" "}
        <ProductName
          name={props.data.name}
          category={props.data.category}
          price={props.data.default_price}
          currentStyle={props.currentStyleName}
          salePrice={props.salePrice}
        />
      </div>
      <div className="styleSelect">
        {" "}
        <StyleTest
          styleData={props.styleData}
          switchStyle={props.switchStyle}
          price={props.price}
          salePrice={props.salePrice}
        />
      </div>
      <div className="sizeQuantitySelect">
        {" "}
        <SizeQuantitySelect
          currentStyleName={props.currentStyleName}
          styleData={props.styleData}
          currentStyle={props.currentStyle}
          styleClicked={props.styleClicked}
          currentProductName={props.currentProductName}
        />
      </div>
      <div className="socialLinks">
        <SocialLinks />
      </div>
    </div>
  );
}

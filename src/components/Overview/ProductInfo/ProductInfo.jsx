import React from "react";
import ProductDescription from "./ProductDescription";
import ProductTraits from "./ProductTraits";

export default function ProductInfo(props) {
  return (
    <div className="container-fluid productInfoBox">
      <div className="row">
        {" "}
        <div className="col-xs-7 col-sm-7 col-md-7 productDescriptionBox">
          <ProductDescription data={props.data} />
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5">
          <ProductTraits data={props.data} />
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5">stockOverflow</h1>
        </div>
      </div>

      <div id="specialOffer">
        <p>SITE WIDE ANNOUNCEMENT --- THIS IS THE GREATEST WEBSITE EVER</p>
      </div>
    </div>
  );
}

{
  /* <div>
{this.props.salePrice ? (
  <p>NOW ${this.props.price - this.props.salePrice}</p>
) : (
  <p>${this.props.price}</p>
)}
<h3>STYLE > SELECTED STYLE</h3> */
}

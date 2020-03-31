import React from "react";

export default function Banner() {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ "background-color": "black" }}
    >
      <div className="container jumbotronContainer">
        <h1 className="display-5">
          Forever404
          <span>
            <i class="fa fa-shopping-cart"></i>
          </span>
        </h1>
      </div>
      {/* <div id="specialOffer">
        <p>SITE WIDE ANNOUNCEMENT --- THIS IS THE GREATEST WEBSITE EVER</p>
      </div> */}
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

import React from "react";
import ShowStars from "../../OverlapWork/ShowStars";

export default class ProductReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="productReviewsOverview" style={{ height: "100%" }}>
        <ShowStars style={{ height: "100%" }} />
      </div>
    );
  }
}

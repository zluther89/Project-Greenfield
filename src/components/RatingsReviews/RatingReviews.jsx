import React from "react";
import { Plus } from "react-feather";
import RatingBreakdown from "./RatingBreakdown"
import ReviewsList from "./ReviewsList"

export default class RatingReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0
    };
    this.GetTotalCount = this.GetTotalCount.bind(this)
  }
  GetTotalCount(value) {
    this.setState({ totalCount: value })
}
  render() {
    return (
      <div className="container my-3">
        <div className="row RatingReviewsTitle">
          <div className="col-3 ">RATINGS & REVIEWS</div>
        </div>
        <div className="row RatingReviewsBody ">
          <div className="col-4"><RatingBreakdown GetTotalCount={this.GetTotalCount}/></div>
          <div className="col-8 ">< ReviewsList totalCount={this.state.totalCount}/></div>
        </div>
        <div className="row justify-content-end RatingReviewsFoot ">
          <div className="col-3 ">
            <button className="btn btn-outline-secondary btn-lg RatingButton">
              <strong>MORE REVIEWS</strong>
            </button>
          </div>
          <div className="col-3 ">
            <button className="btn btn-outline-secondary btn-lg RatingButton">
              {" "}
              <strong className="RightMargin">ADD A REVIEW</strong>{" "}
              <Plus
                size={20}
                style={{ "marginBottom": "0.3em" }}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

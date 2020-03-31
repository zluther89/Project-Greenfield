import React from "react";

import RatingBreakdown from "./RatingBreakdown"
import ReviewsList from "./ReviewsList"

export default class RatingReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      StarFilter:[]

    };
    this.GetTotalCount = this.GetTotalCount.bind(this)
    this.GetStarFilter = this.GetStarFilter.bind(this)

  }
  GetTotalCount(value) {
    this.setState({ totalCount: value })
  }
  GetStarFilter(array) {
    let NumArr = array.map( ele =>ele.split('')[0])

   this.setState({StarFilter:NumArr})

  }

  render() {
    return (
      <div className="container my-3 "style={{"height":"100%"}}>
        <div className="row RatingReviewsTitle">
          <div className="col-3 ">RATINGS & REVIEWS</div>
        </div>
        <div className="row RatingReviewsBody  " style={{"height":"100%"}}>
          <div className="col-4"><RatingBreakdown GetTotalCount={this.GetTotalCount} GetStarFilter={this.GetStarFilter}/></div>
          <div className="col-8 " >< ReviewsList totalCount={this.state.totalCount} StarFilter={this.state.StarFilter}/></div>
        </div>
        <div className="row justify-content-end RatingReviewsFoot ">
        </div>
      </div>
    );
  }
}

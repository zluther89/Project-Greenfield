import React from "react";
import WriteNewReview from "./WriteNewReview"
//import dropdown component
import "bootstrap/dist/js/bootstrap.bundle";
import IndividualReview from "./individualReview"
import Axios from "axios"
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      ShowAllReviews:false
    };
    this.GetReviewList = this.GetReviewList.bind(this)
    this.ReGetReview= this.ReGetReview.bind(this)
  }
  componentDidMount() {
    this.GetReviewList()
  }
  GetReviewList(sort = "relevance") {
    if (this.state.ShowAllReviews) {
      Axios.get(`http://3.134.102.30/reviews/5/list?sort=${sort}&count=10000`)
        .then(response => {
        this.setState({results:response.data.results})
        })
      .catch(err => console.log("fail getting review list"))
    } else {
      Axios.get(`http://3.134.102.30/reviews/5/list?sort=${sort}&count=2&page=1`)
      .then(response => {
      this.setState({results:response.data.results})
      })
    .catch(err => console.log("fail getting review list"))
    }
  }
  ReGetReview() {
    this.setState({ ShowAllReviews: !this.state.ShowAllReviews }, () => {
      this.GetReviewList()
    })
  }
render() {
    return (
      <div style={{ height: "100%" }} >
        <div className="row" style={{ height: "5%" }}>
          <p mt-3="true">{this.props.totalCount} reviews, sorted by</p>
          <div className="select">
            <select  onChange={(e) => { this.GetReviewList(e.target.value) }}>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
              <option value="helpful">helpful</option>
            </select>
          </div>
        </div>
        <div className="row " style={{ "overflow": "scroll", "height": "800px" }}><IndividualReview stars={this.props.StarFilter} results={this.state.results} /></div>
        <div className="row justify-content-start RatingReviewsFoot ">
        <div className="col-4" >
            <button className="btn btn-outline-secondary btn-lg  " onClick={this.ReGetReview}>
              <strong>{this.state.ShowAllReviews ?"FOLD REVIEWS UP": "MORE REVIEWS"}</strong>
            </button>
        </div>
          <div className="col-4" >
            <WriteNewReview />
          </div>
          </div>
      </div>
    );
  }
}
export default ReviewsList;

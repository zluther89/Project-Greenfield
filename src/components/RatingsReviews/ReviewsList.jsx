import React from "react";
//import dropdown component
import "bootstrap/dist/js/bootstrap.bundle";
import IndividualReview from "./individualReview"
import Axios from "axios"
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results:[]
    };
  this.GetReviewList = this.GetReviewList.bind(this)
  }
  componentDidMount() {
    this.GetReviewList()
  }
  GetReviewList(sort="relevance") {
    Axios.get(`http://3.134.102.30/reviews/3/list?sort=${sort}&count=2`)
      .then(response => {
      this.setState({results:response.data.results})
      })
    .catch(err => console.log("fail getting review list"))
  }
  render() {
    return (
      <div style={{ height: "100%" }}>
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
        <div className="row " style={{ height: "90%" }}><IndividualReview results={this.state.results}/></div>
      </div>
    );
  }
}
export default ReviewsList;

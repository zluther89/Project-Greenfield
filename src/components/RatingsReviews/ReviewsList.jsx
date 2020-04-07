import React from "react";
import WriteNewReview from "./WriteNewReview"
//import dropdown component
import "bootstrap/dist/js/bootstrap.bundle";
import IndividualReview from "./individualReview"
import Axios from "axios"
import { connect } from "react-redux";

const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});
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
    let productId = this.props.productId || 3
    if (this.state.ShowAllReviews) {
      Axios.get(`http://18.224.200.47/reviews/${productId}/list?sort=${sort}&count=100`)
        .then(response => {
        this.setState({results:response.data.results})
        })
      .catch(err => console.log("fail getting review list"))
    } else {
      Axios.get(`http://18.224.200.47/reviews/${productId}/list?sort=${sort}&count=2&page=1`)
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
          <p mt-3="true">{this.props.totalCount} Reviews, Sorted by:</p>
          <div className="select">
            <select  onChange={(e) => { this.GetReviewList(e.target.value) }}>
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
          </div>
        </div>
        <div className="row scrollable" style={{ "overflow": "scroll", "height": "800px" }}><IndividualReview stars={this.props.StarFilter} results={this.state.results} /></div>
        <div className="row justify-content-start RatingReviewsFoot ">
        <div className="col-4" >
            <button className="btn btn-outline-secondary  QnAButton " onClick={this.ReGetReview}>
              {this.state.ShowAllReviews ?"Fold Up": "More Reviews"}
            </button>
        </div>
          <div className="col-4" >
            <WriteNewReview productId={this.props.productId}/>
          </div>
          </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(ReviewsList);
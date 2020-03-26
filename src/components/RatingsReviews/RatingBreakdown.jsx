import React from "react"
import ShowStars from "../OverlapWork/ShowStars"
import Axios from"axios"
import BarBreakdown from "./BarBreakdown"
class RatingBreakdown extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      recommend: 0,
      pairArr :[],
      sum:0
    }
  }
  componentDidMount() {
    this.GetReviewMet()
  }
  GetReviewMet(product_id =2) {
    let count = 0;
    let sum = 0;
    let pairArr =[]
    Axios.get(`http://3.134.102.30/reviews/${product_id}/meta`)
      .then(response => {
        //get recommend percentage
        const recommends = response.data.recommended
        const recommendSum = recommends["0"] + recommends["1"];
        const recommend = recommends["1"]
        const recommendPercen = Math.round(recommend / recommendSum * 10) *10
        //get allratings
        const AllRatings = response.data.ratings
        for (let val in AllRatings) {
          let EachArr = [];
          EachArr.push(val,AllRatings[val])
          sum += val * AllRatings[val];
          count += AllRatings[val]
          pairArr.push(EachArr)
        }
        const rating = sum /count
        //get the one round number
        const roundedRating = Math.round(rating * 10) / 10
        this.setState({rating:roundedRating,recommend:recommendPercen,sum:sum,pairArr:pairArr})
      }
      )
    .catch(err =>console.log(err)
    )
  }
  render() {
    return (
      <div style={{"height":"100%"}}>
        <div className="row " style={{ "height": "10%" }}>
          <div className="col-4  "><h1>{this.state.rating}</h1></div> <div className="col-8"><ShowStars /></div>
          </div>
        <div className="row " style={{ "height": "5%" }}><p> {this.state.recommend}% of reviews recommend this product</p></div>
        <div className="row " style={{ "height": "50%" }}><BarBreakdown sum={this.state.sum} pairArr={this.state.pairArr}/></div>
      <div className="row p-3 mb-2 bg-primary" style={{"height":"5%"}}>11</div>
        <div className="row p-3 mb-2 bg-info" style={{ "height": "5%" }}>11</div>
        </div>
    )
  }
}
export default RatingBreakdown
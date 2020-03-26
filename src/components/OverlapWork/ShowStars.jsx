import Axios from "axios";
import React from "react"

class ShowStars extends React.Component{
  constructor(props) {
    super(props)
    this.state = { rating: 0 }
  }
  componentDidMount() {
    this.GetReviewMet()
  }
  GetReviewMet(product_id = 2) {
    let count = 0;
    let sum =0
    Axios.get(`http://3.134.102.30/reviews/${product_id}/meta`)
      .then(response => {
        const AllRatings = response.data.ratings
        for (let val in AllRatings) {
          sum += val * AllRatings[val];
          count += AllRatings[val]
        }
        const rating = sum /count
        //get the one round number
        const roundedRating = Math.round(rating * 10) / 10
        this.setState({rating:roundedRating})
      }
      )
    .catch(err =>console.log(err)
    )
  }
  render() {
    return (
    <div className="grade-progress-box">
    <div className="grade-star-bg">
      <div className="grade-star-gradual">
        <span className="progress" style={{"width": "100%"}}></span>
        <div className="grade-star-img bgsize"></div>
      </div>
   </div>
    <div className="grade-number grade-number1"></div>
</div>)

  }
}


export default ShowStars
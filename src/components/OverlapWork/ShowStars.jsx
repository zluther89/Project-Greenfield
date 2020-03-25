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
    return (<div>{this.state.rating}</div>)

  }
}


export default ShowStars
import Axios from "axios";
import React from "react"
import FiveStars from "../../image/five_stars_empty_mid.png"
class ShowStars extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      ratingPercen:0
    }
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
        //get percentage
        const ratingPercen = Math.round(roundedRating /5 *100)
        this.setState({rating:roundedRating,ratingPercen:ratingPercen})
      }
      )
    .catch(err =>console.log(err)
    )
  }
  render() {
    return (
      <div class="progress" style={{"height":"2rem"}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated  " style={{ "width": `${this.state.ratingPercen}%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ><img className="grade-star-img "></img></div>
</div>
    )

  }
}


export default ShowStars
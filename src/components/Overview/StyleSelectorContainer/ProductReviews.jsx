import React from "react";

import Axios from "axios";

class ShowStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      ratingPercen: 0
    };
  }
  componentDidMount() {
    this.GetReviewMet();
  }
  GetReviewMet(product_id = 3) {
    let count = 0;
    let sum = 0;
    Axios.get(`http://3.134.102.30/reviews/${product_id}/meta`)
      .then(response => {
        const AllRatings = response.data.ratings;
        for (let val in AllRatings) {
          sum += val * AllRatings[val];
          count += AllRatings[val];
        }
        const rating = sum / count;
        //get the one round number
        const roundedRating = Math.round(rating * 10) / 10;
        //get percentage
        //first get the number whose denominator is ten
        const NumberInTen = rating;
        //get int part
        const Int = parseInt(NumberInTen);
        const modul = NumberInTen - Int;
        let ratingPercen;
        if ((modul >= 0) & (modul < 0.125)) {
          ratingPercen = Int;
        } else if ((modul >= 0.125) & (modul < 0.375)) {
          ratingPercen = Int + 0.48;
        } else if ((modul >= 0.375) & (modul < 0.625)) {
          ratingPercen = Int + 0.6;
        } else if ((modul >= 0.625) & (modul < 0.875)) {
          ratingPercen = Int + 0.7;
        } else {
          ratingPercen = Int + 1;
        }
        ratingPercen = 20 * ratingPercen;
        this.setState({ rating: roundedRating, ratingPercen: ratingPercen });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <div></div>;
  }
}

export default ShowStars;

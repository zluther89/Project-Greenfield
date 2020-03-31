import React from "react";

import EachReview from "./eachreview"

class individualReview extends React.Component {
  //review body function
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    let stars = this.props.stars.map(ele => Number(ele))

    return this.props.results.map(result => {
      //change date to Month DD, YYYY
      if (stars.length === 0) {
        return <EachReview result={result} />
      } else {
        if (stars.indexOf(result.rating) > -1) {
          return <EachReview result={result} />
      }
      }
    })

  }
}

export default individualReview;

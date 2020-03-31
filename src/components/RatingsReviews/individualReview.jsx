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
    return this.props.results.map( (result,i) => {
      //change date to Month DD, YYYY
      return <EachReview key={i} result={result} />
    })

  }
}

export default individualReview;

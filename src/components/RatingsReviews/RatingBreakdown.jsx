import React from "react"

class RatingBreakdown extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    return (
      <div style={{"height":"100%"}}>
        <div className="row p-3 mb-2 bg-primary" style={{ "height": "20%" }}>
          <div className="col-3">11</div> <div className="col-9">22</div>
          </div>
        <div className="row " style={{ "height": "5%" }}><p>of reviews recommend this product</p></div>
      <div className="row p-3 mb-2 bg-info" style={{"height":"40%"}}>11</div>
      <div className="row p-3 mb-2 bg-primary" style={{"height":"5%"}}>11</div>
        <div className="row p-3 mb-2 bg-info" style={{ "height": "5%" }}>11</div>
        </div>
    )
  }
}
export default RatingBreakdown
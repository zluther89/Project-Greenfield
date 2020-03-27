import React from "react";

class BarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  GetPrecent(number) {
    return number /this.props.count * 100
  }
  render() {
    let onestar = 0
    let twostar = 0
    let threestar = 0
    let fourstar = 0
    let fivestar = 0
    for (let i = 0; i < this.props.pairArr.length; i++){
      if (Number(this.props.pairArr[i][0]) === 1) {
        onestar=this.props.pairArr[i][1]
      } else if (Number(this.props.pairArr[i][0]) === 2) {
        twostar = this.props.pairArr[i][1]
      }else if (Number(this.props.pairArr[i][0]) === 3) {
        threestar = this.props.pairArr[i][1]
      }else if (Number(this.props.pairArr[i][0]) === 4) {
        fourstar = this.props.pairArr[i][1]
      }else if (Number(this.props.pairArr[i][0]) === 5) {
        fivestar = this.props.pairArr[i][1]
      }
    }
    return (
      <div style={{ width: "100%" }}>
        <div className="row my-3">
          <div className="col-3  ml-3">
            <u type="button">5 stars</u>
          </div>
          <div className="col-7 my-1  ">
            <div className="progress" >
              <div
                class=" bg-success progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${this.GetPrecent(fivestar)}%` }}
              ></div>
            </div>
          </div>
          <div className="col">
            {fivestar}
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3 ml-3">
            <u type="button">4 stars</u>
          </div>
          <div className="col-7 my-1  ">
            <div className="progress" >
              <div
                class=" bg-success progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${this.GetPrecent(fourstar)}%` }}
              ></div>
            </div>
          </div>
          <div className="col">
            {fourstar}
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3 ml-3">
            <u type="button">3 stars</u>
          </div>
          <div className="col-7 my-1  ">
            <div className="progress" >
              <div
                class=" bg-success progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${this.GetPrecent(threestar)}%` }}
              ></div>
            </div>
          </div>
          <div className="col">
            {threestar}
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3 ml-3">
            <u type="button">2 stars</u>
          </div>
          <div className="col-7 my-1  ">
            <div className="progress" >
              <div
                class=" bg-success progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${this.GetPrecent(twostar)}%` }}
              ></div>
            </div>
          </div>
          <div className="col">
            {twostar}
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3 ml-3">
            <u type="button">1 stars</u>
          </div>
          <div className="col-7 my-1  ">
            <div className="progress" >
              <div
                class=" bg-success progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${this.GetPrecent(onestar)}%` }}
              ></div>
            </div>
          </div>
          <div className="col">
            {onestar}
          </div>
        </div>
      </div>
    );
  }
}
export default BarBreakdown;

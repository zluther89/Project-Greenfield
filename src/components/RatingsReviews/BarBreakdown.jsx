import React from "react";

class BarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
        <div className="row ">
          <div className="col p-3 mb-2 bg-primary text-white">
              <u>5 stars</u>
              </div>
            <div className="col-8 p-3 mb-2 bg-warning text-dark">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>

            </div>
          </div>
          </div>
          </div>
        <div className="row my-3 ">
          <div className="col-10">
            <u>4 stars</u>
          </div>
          <div className="col">
          <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>

            </div>
          </div>
        </div>
        <div className="row my-3 ">
          <div className="col">
            <u>3 stars</u>
          </div>
        </div>
        <div className="row my-3 ">
          <div className="col">
            <u>2 stars</u>
          </div>
        </div>
        <div className="row my-3 ">
          <div className="col">
            <u>1 stars</u>
          </div>
        </div>
      </div>
    );
  }
}
export default BarBreakdown;

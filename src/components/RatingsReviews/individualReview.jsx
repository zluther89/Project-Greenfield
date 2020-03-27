import React from "react";

const individualReview = ({ results }) => {
  return results.map(result => {
    return (
      <div
        className="p-3 "
        style={{ height: "50%", width: "100%" }}
      >
        <div className="row justify-content-between" style={{ height: "10%" }}>
          <div className="col-4 ml-2">star bar</div>
          <div className="col-4">username+date</div>
        </div>
        <div className="row justify-content-between my-2 ml-2" style={{ height: "10%" }}>
          <b>Review Summary</b>
        </div>
        <div className="row my-2 ml-2" style={{ height: "20%" }}>
          <p>Review Body</p>
        </div>
        <div className="row  ml-2" style={{ height: "10%" }}>
          <p>recommend</p>
        </div>
        <div className="row  my-2 ml-2" style={{ height: "20%" }}>
          <p>response</p>
        </div>
        <div className="row  my-1 ml-2" style={{ height: "5%" }}>
          <p>helpful</p>

        </div>
        <hr className="Hrsolid"></hr>
      </div>
    );
  });
};

export default individualReview;

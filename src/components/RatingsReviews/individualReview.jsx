import React from "react";
import { Check } from "react-feather";

const individualReview = ({ results }) => {
  //review body function
  return results.map(result => {
    //change date to Month DD, YYYY
    var date = new Date(`${result.date}`);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const NewDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return (
      <div className="p-3 "key={result.id} style={{ height: "50%", width: "100%" }}>
        <div className="row justify-content-between" style={{ height: "10%" }}>
          <div className="col-5 ml-2">star bar</div>
          <div className="col RightText">
            {result.reviewer_name}, {NewDate}
          </div>
        </div>
        <div className="row my-2 ml-2" style={{ height: "10%" }}>
          <b>{result.summary.slice(0, 60)}</b>
        </div>
        <div className="row my-2 ml-2" style={{ height: "30%" }}>
          <p>{result.body.slice(0, 250)}</p>
          {result.body.length > 250 ? <u type="button">Show more</u> : null}
        </div>
        {result.recommend === 1 ? (
          <div className="row  ml-2 my-4" style={{ height: "10%" }}>
            <Check size={24} />
            <p>I recommend this product</p>
          </div>
        ) : null}
        {result.response ===true && result.response !== "" ? (
          <div
            className="row  my-2 ml-2 p-3 mb-2 bg-light"
            style={{ height: "20%" }}
          >
            <b style={{ height: "5%" }}>Response:</b>
            <p>{result.response}</p>
          </div>
        ) : null}
        <div className="row  my-1 ml-2 my-4" style={{ height: "5%" }}>
          <p className="RightMargin">Helpful?</p>
          <u  type="button">Yes</u>
          <p style={{"borderRight":"ridge","width":"7%"}}className="RightMargin">({result.helpfulness})</p>
          <u className="RightMargin"type="button">Report</u>
        </div>
        <hr className="Hrsolid"></hr>
      </div>
    );
  });
};

export default individualReview;

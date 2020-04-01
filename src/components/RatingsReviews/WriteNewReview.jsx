import React from "react";
import { Plus } from "react-feather";
import $ from "jquery";
import Axios from "axios"
const WriteNewReview = props => {
  //get characteristic
  let characteristics = []


  Axios.get(`http://3.134.102.30/reviews/${window.location.href.split("").slice(31).join()}/meta`)
      .then(response => {
        //get recommend percentage
        //change object to array
        return characteristics = Object.keys(response.data.characteristics).map(function(key) {
          return [key, response.data.characteristics[key]];

        })
      }

        )
      .catch(err =>console.log(err)
      )
  $(document).ready(function() {
    $("#makePostRequire").click(function() {
      var userid = $(this);
      console.log(userid);
    });
  });
  return (
    <div>
      <button
        className="btn btn-outline-secondary btn-lg RatingButton"
        data-toggle="modal"
        data-target="#createNewReview"
      >
        {" "}
        <strong className="RightMargin">ADD A REVIEW</strong>{" "}
        <Plus size={20} style={{ marginBottom: "0.3em" }} />
      </button>
      {/* model */}
      <div
        className="modal fade"
        id="createNewReview"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createNewReview"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title row" id="createNewReview">
                Write Your Review
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <p className="row">all information with * should be mandatory</p>
              <div className="row">
                <h6>*</h6>
              </div>
              <div className="row">
                <h6>* Do you recommend this product?</h6>
                <div className="col RightText">
                  <input
                    type="radio"
                    id="recommend"
                    name="recommend"
                    value="1"
                  />
                  <label className="RadioMargin">Yes</label>
                  <input type="radio" id="Norecommend" name="recommend" value="0" />
                  <label>No</label>
                </div>
              </div>
              <div className="row">
                <h6>* Characteristics:</h6>
                {characteristics.map(characteristic =>
                  <div className="row align-items-start">{characteristic[0]}</div>)}
              </div>
            </div>



            {/* footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary "
                id="makePostRequire"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WriteNewReview;

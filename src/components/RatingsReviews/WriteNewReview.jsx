import React from "react"
import { Plus } from "react-feather";
import $ from "jquery"
const WriteNewReview = props => {
  // HandleInputChange(e){

  // }
  $(document).ready(function () {

    $('#makePostRequire').click(function () {

      var userid = $(this);
      console.log(userid);

    })
  })
  return (
    <div>
    <button className="btn btn-outline-secondary btn-lg RatingButton" data-toggle="modal" data-target="#createNewReview">
    {" "}
    <strong className="RightMargin">ADD A REVIEW</strong>{" "}
    <Plus
      size={20}
      style={{ "marginBottom": "0.3em" }}
    />
    </button>
    {/* model */}
    <div className="modal fade" id="createNewReview" tabIndex="-1" role="dialog" aria-labelledby="createNewReview" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="createNewReview">Write Your Review</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <input type ="text"data-id="111"></input>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary " id="makePostRequire">Submit</button>
      </div>
    </div>
  </div>
      </div>
      </div>
  )
}
export default WriteNewReview
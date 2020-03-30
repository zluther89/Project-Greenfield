import React from "react";
import { Check } from "react-feather";
import ShowStars from "../OverlapWork/ShowStars";
import $ from "jquery"
class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowAll: false
    };
    this.HandleShowAll = this.HandleShowAll.bind(this);
  }
  componentDidMount() {
    //imgmodal
    $('#imgModal').on('show.bs.modal', function(e) {
      //get id and link attribute of the clicked element
      // var id = $(e.relatedTarget).data("key");
      var src = $(e.relatedTarget).data("src");
      //populate the img
      console.log(src);

      // $(e.currentTarget).find('input[name="id"]').val(id);
      $(e.currentTarget).find('input[src="src"]').attr("src",src)
     });
    //triggered when modal is about to be shown
  }
  HandleShowAll() {
    this.setState({ ShowAll: !this.state.ShowAll });
  }
  render() {


    let result = this.props.result;
    var date = new Date(`${result.date}`);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const NewDate = new Intl.DateTimeFormat("en-US", options).format(date);
    //conditional render component body
    return (
      <div
        className="p-3 "
        key={result.id}
        style={{ height: "50%", width: "100%" }}
      >
        {/* img modal */}
        <div
          class="modal fade"
          id="imgModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <input type="image" src="src" className="EachPhoto"/>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >Close
                </button>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="row justify-content-between" style={{ height: "10%" }}>
          <div className="col-5 ml-2">
            <ShowStars star={result.rating} />
          </div>
          <div className="col RightText">
            {result.reviewer_name}, {NewDate}
          </div>
        </div>
        <div className="row my-2 ml-2" style={{ height: "10%" }}>
          <b>{result.summary.slice(0, 60)}</b>
        </div>
        <div
          className="row mt-2 ml-2 "
          style={{ height: "35%", overflow: "scroll" }}
        >
          <p>
            {result.body.slice(0, 250)}
            {this.state.ShowAll ? result.body.slice(250) : null}
          </p>
        </div>

        <div className="row ml-2 " style={{ height: "5%" }}>
          {result.body.length > 250 ? (
            <u type="button" onClick={this.HandleShowAll}>
              {this.state.ShowAll ? "Fold up" : "Show All"}
            </u>
          ) : null}
        </div>
        <div className="row ml-2 my-2" style={{ height: "5%" }}>
          {result.photos.length === 0
            ? null
            : result.photos.map(photo => {
                return (
                  <img
                    height="50"
                    width="50"
                    type="button"
                    data-toggle="modal"
                    data-target="#imgModal"
                    data-src={photo.url}
                    key={photo.id}
                    src={photo.url}
                    alt="Whoops, photo disappears"
                    className="img-thumbnail"
                  ></img>
                );
              })}
        </div>
        {result.recommend === 1 ? (
          <div className="row  ml-2 my-4" style={{ height: "10%" }}>
            <Check size={24} />
            <p>I recommend this product</p>
          </div>
        ) : null}
        {result.response === true && result.response !== "" ? (
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
          <u type="button">Yes</u>
          <p
            style={{ borderRight: "ridge", width: "7%" }}
            className="RightMargin"
          >
            ({result.helpfulness})
          </p>
          <u className="RightMargin" type="button">
            Report
          </u>
        </div>
        <hr className="Hrsolid"></hr>
      </div>
    );
  }
}
export default EachReview;

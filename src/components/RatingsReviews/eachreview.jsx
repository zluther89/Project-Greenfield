import React from "react";
import { Check } from "react-feather";
import ShowStars from "../OverlapWork/ShowStars";
import Axios from "axios";
class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowAll: false,
      helpNum: 0
    };
    this.HandleShowAll = this.HandleShowAll.bind(this);
    this.HandleHelp = this.HandleHelp.bind(this);
    this.HandleReport = this.HandleReport.bind(this)
  }
  componentDidMount() {
    this.setState({ helpNum: this.props.result.helpfulness });
  }
  HandleShowAll() {
    this.setState({ ShowAll: !this.state.ShowAll });
  }
  HandleHelp() {
    var data = localStorage.getItem(
      `${this.props.result.review_id}`
    );
    if (data === null) {
      let tempt = this.state.helpNum;
      tempt += 1;
      this.setState({ helpNum: tempt });
      localStorage.setItem(
        `${this.props.result.review_id}`,
        `${this.props.result.review_id}`
      );
      Axios.put(
        ` http://3.134.102.30/reviews/helpful/${this.props.result.review_id}`
      )
        .then(console.log("send successful"))
        .catch(err => console.log("fail putting request"));
    }
  }
  HandleReport() {
    var data = localStorage.getItem(
      `${this.props.result.review_id}`
    );
    if (data === null) {
      localStorage.setItem(
        `${this.props.result.review_id}`,
        `${this.props.result.review_id}`
      );
      Axios.put(
        ` http://3.134.102.30/reviews/report/${this.props.result.review_id}`
      )
        .then(console.log("send successful"))
        .catch(err => console.log("fail putting request"));
    }
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
        style={{ height: "40%", width: "100%" }}
      >
        {/* img modal */}
        <div
          className="modal fade"
          id="imgModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <input type="image" src="https://source.unsplash.com/random/600x800" className="EachPhoto" alt="" />
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
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
        <div className="row my-2 ml-2" style={{ height: "8%" }}>
          <b>{result.summary.slice(0, 60)}</b>
        </div>
        <div
          className="row mt-2 ml-2 "
          style={{ height: "30%", overflow: "scroll" }}
        >
          <p>
            {result.body.slice(0, 251)}
            {this.state.ShowAll ? result.body.slice(251) : null}
          </p>
        </div>

        <div className="row ml-2 " style={{ height: "5%" }}>
          {result.body.length > 251 ? (
            <u type="button" onClick={this.HandleShowAll}>
              {this.state.ShowAll ? "Fold up" : "Show All"}
            </u>
          ) : null}
        </div>
        <div className="row ml-2 my-3" style={{ height: "15%" }}>
          {result.photos.length === 0
            ? null
            : result.photos.map(photo => {
                return (
                  <img
                    height="50px"
                    width="50px"
                    type="button"
                    data-toggle="modal"
                    data-target="#imgModal"
                    data-src={photo.url}
                    key={photo.id}
                    src={photo.url}
                    alt="Whoops, disappears"
                    className="img-thumbnail"
                  ></img>
                );
              })}
        </div>
        {result.recommend === 1 ? (
          <div className="row  ml-2 my-4" style={{ height: "5%" }}>
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
        <div className="row  ml-2 my-4" style={{ height: "5%" }}>
          <p className="RightMargin">Helpful?</p>
          <u type="button" onClick={this.HandleHelp}>
            Yes
          </u>
          <p
            style={{ borderRight: "ridge", width: "7%" }}
            className="RightMargin"
          >
            ({this.state.helpNum})
          </p>
          <u className="RightMargin" type="button" onClick={this.HandleReport}>
            Report
          </u>
        </div>
        <hr className="Hrsolid "></hr>
      </div>
    );
  }
}
export default EachReview;

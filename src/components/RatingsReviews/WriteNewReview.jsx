import React from "react";
import { Plus } from "react-feather";
import StarMarking from "./StarMarking";
import $ from "jquery";
import Axios from "axios";
class WriteNewReview extends React.Component {
  //get characteristic
  constructor(props) {
    super(props);
    this.state = {
      characteristics: [],
      Size: "",
      Width: "",
      Comfort: "",
      Quality: "",
      Length: "",
      Fit: "",
      AddReview: {
        rating: 0,
        summary: "",
        body: "",
        recommend: false,
        name: "",
        email: "",
        photos: [],
        characteristics: {}
      }
    };
    this.handleCharacteristic = this.handleCharacteristic.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleText = this.handleText.bind(this)
  }
  componentDidMount() {
    this.GetCharacterstics();
  }
  GetCharacterstics() {
    let productId = this.props.productId || 3;
    Axios.get(`http://3.134.102.30/reviews/${productId}/meta`)
      .then(response => {
        //get recommend percentage
        //change object to array
        let characteristics = Object.keys(response.data.characteristics).map(
          function(key) {
            return [key, response.data.characteristics[key]];
          }
        );
        this.setState({ characteristics: characteristics });
      })
      .catch(err => console.log(err));
  }
  handleCharacteristic(e) {
    let characteristic = e.target.id;
    let select = e.target.value;
    const AllCharacteristics = {
      Size: {
        1: "A size too small",
        2: "1/2a size too small",
        3: "Perfect",
        4: "1/2 a size too big",
        5: "A size too wide"
      },
      Width: {
        1: "Too narrow",
        2: "Slightly narrow",
        3: "Perfect",
        4: "Slightly wide",
        5: "Too wide"
      },
      Comfort: {
        1: "Uncomfortable",
        2: "Slightly uncomfortable",
        3: "Ok",
        4: "Comfortable",
        5: "Perfect"
      },
      Quality: {
        1: "poor",
        2: "Below average",
        3: "What I expected",
        4: "Pretty great",
        5: "Perfect"
      },
      Length: {
        1: "Runs short",
        2: "Runs slightly short",
        3: "Perfect",
        4: "Runs slightly long",
        5: "Runs long"
      },
      Fit: {
        1: "Runs tight",
        2: "Runs slightly tight",
        3: "Perfect",
        4: "Runs slightly long",
        5: "Runs long"
      }
    };
    this.setState({
      [characteristic]: AllCharacteristics[characteristic][select]
    });
  }
  handleRating(rating) {
    this.setState(prevState => ({
      AddReview: {
        // object that we want to update
        ...prevState.AddReview, // keep all other key-value pairs
        rating: rating // update the value of specific key
      }
    }));
  }
  handleText(e) {
    console.log(e.target.id);

  console.log(e.target.value);

  }
  render() {
    return (
      <div>
        <form action="/action_page.php">
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
            className="modal fade "
            id="createNewReview"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="createNewReview"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
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
                  <p className="row">
                    all information with * should be mandatory
                  </p>
                  <div className="row">
                    <h6>*Overall rating</h6>
                  </div>
                  <div className="row">
                    <StarMarking handleRating={this.handleRating} />
                  </div>
                  <div className="row">
                    <h6>* Do you recommend this product?</h6>
                    <div className="col RadioNumber">
                      <input
                        type="radio"
                        id="recommend"
                        name="recommend"
                        value="1"
                        required
                      />
                      <label className="RadioMargin">Yes</label>
                      <input
                        type="radio"
                        id="Norecommend"
                        name="recommend"
                        value="0"
                      />
                      <label>No</label>
                    </div>
                  </div>
                  <div>
                    <h6>* Characteristics:</h6>
                    {this.state.characteristics.map(characteristic => (
                      <div key={characteristic[1].id} className="container">
                        <div className="row align-items-start">
                          {characteristic[0]}
                        </div>
                        <div className="row align-items-start">
                          {this.state[characteristic[0]]}
                        </div>
                        <div className="row align-items-start">
                          <div className=" CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              name={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              value="1"
                              required
                            />{" "}
                          </div>
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              name={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              value="2"
                            />{" "}
                          </div>
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              name={characteristic[0]}
                              value="3"
                            />
                          </div>{" "}
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              name={characteristic[0]}
                              value="4"
                            />{" "}
                          </div>
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              name={characteristic[0]}
                              value="5"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <p style={{ marginLeft: "4.3rem" }}>1</p>
                          <p className="RadioNumber">2</p>
                          <p className="RadioNumber">3</p>
                          <p className="RadioNumber">4</p>
                          <p className="RadioNumber">5</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <h6>Review Summary</h6>
                  </div>
                  <div className="row">
                    <input
                      className="form-control"
                      type="text"
                      maxLength="60"
                      id="summary"
                      onChange={this.handleText}
                      placeholder="Example: Best purchase ever!"
                    ></input>
                  </div>
                  <div className="row">
                    <h6>*Review body</h6>
                  </div>
                  <div className="row">
                    <input
                      maxLength="1000"
                      minLength="50"
                      className="form-control"
                      type="text"
                      id="summary"
                      required
                      placeholder="Why did you like the product or not？"
                    ></input>
                  </div>
                  <div className="row">
                    <h6>Upload your photos</h6>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroupFileAddon01"
                      >
                        Upload
                      </span>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      ></input>
                      <label className="custom-file-label">Choose file</label>
                    </div>
                  </div>
                  <div className="row">
                    <h6>*What is your nick name</h6>
                  </div>
                  <div className="row">
                    <input
                      required
                      maxLength="60"
                      minLength="1"
                      className="form-control"
                      type="text"
                      id="summary"
                      placeholder="Example: jackson11!"
                    ></input>
                  </div>
                  <div className="row">
                    <p>
                      For privacy reasons, do not use your full name or email
                      address
                    </p>
                  </div>
                  <div className="row">
                    <h6>*Your email</h6>
                  </div>
                  <div className="row">
                    <input
                      required
                      className="form-control"
                      type="email"
                      maxLength="60"
                      minLength="1"
                      id="summary"
                      placeholder="Example: jackson11@email.com"
                    ></input>
                  </div>
                  <div className="row">
                    <p>For authentication reasons, you will not be emailed</p>
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
                    type="submit"
                    className="btn btn-primary "
                    id="makePostRequire"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default WriteNewReview;

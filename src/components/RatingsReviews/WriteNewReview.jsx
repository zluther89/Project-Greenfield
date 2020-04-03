import React from "react";
import { Plus } from "react-feather";
import StarMarking from "./StarMarking";
import $ from "jquery";
import Axios from "axios";
import ReactFilestack from 'filestack-react';
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
    this.handleText = this.handleText.bind(this);
    this.handleBoolean = this.handleBoolean.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
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
    let characteristic = e.target.id; //name of characteristic e.x:size
    let select = e.target.value; //number e.x:3
    let id = e.target.name; //id of characteristic e.x:6

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
    this.setState(prevState => ({
      AddReview: {
        // object that we want to update
        ...prevState.AddReview, // keep all other key-value pairs
        characteristics: {
          // specific object of stateobject
          ...prevState.AddReview.characteristics, // copy all key-value pairs
          [id]: select // update value of specific key
        }
      }
    }));
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
    let name = e.target.id;
    let value = e.target.value;
    this.setState(prevState => ({
      AddReview: {
        // object that we want to update
        ...prevState.AddReview, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }));
  }
  handleBoolean(e) {
    let value = e.target.value === "true" ? true : false;
    this.setState(prevState => ({
      AddReview: {
        // object that we want to update
        ...prevState.AddReview, // keep all other key-value pairs
        recommend: value // update the value of specific key
      }
    }),()=>console.log(this.state.AddReview)
    );
  }
  handlePost() {
    let productId = this.props.productId || 3;
    Axios.post(`http://3.134.102.30/reviews/${productId}`, this.state.AddReview)
      .then(response => {

        this.setState({ AddReview: {  rating: 0,
          summary: "",
          body: "",
          recommend: false,
          name: "",
          email: "",
          photos: [],
          characteristics: {}
        }
        }, () => alert("send successfully!"));
      })
      .catch(err => console.log("can't send request to api",err));
  }
  handlePhoto(e) {
    let url = e.filesUploaded[0].url;   //https://cdn.filestackcontent.com/T3Fsobv8TAuqfmBsagCB
    let tempt = this.state.AddReview.photos
    tempt.push(url)
    this.setState(prevState => ({
      AddReview: {
        // object that we want to update
        ...prevState.AddReview, // keep all other key-value pairs
        photos: tempt // update the value of specific key
      }
    }))

  }

  render() {
    return (
      <div>
        <form action="/action_page.php">
        <div className="row">
          <button
            className="btn btn-outline-secondary QnAButton RatingButton"
            data-toggle="modal"
            data-target="#createNewReview"
          >
            {" "}
            <strong className="RightMargin QnAButton ">ADD A REVIEW</strong>{" "}
            <Plus size={20} style={{ marginBottom: "0.3em" }} />
          </button></div>

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
                    all information with <font color="red">*</font> should be mandatory
                  </p>
                  <div className="row">
                    <h6><font color="red">*</font>Overall rating</h6>
                  </div>
                  <div className="row">
                    <StarMarking handleRating={this.handleRating} />
                  </div>
                  <div className="row">
                    <h6><font color="red">*</font> Do you recommend this product?</h6>
                    <div className="col RadioNumber">
                      <input
                        type="radio"
                        id="recommend"
                        onClick={this.handleBoolean}
                        name="recommend"
                        value="true"
                        required
                      />
                      <label className="RadioMargin">Yes</label>
                      <input
                        type="radio"
                        id="Norecommend"
                        onClick={this.handleBoolean}
                        name="recommend"
                        value="flase"
                      />
                      <label>No</label>
                    </div>
                  </div>
                  <div>
                    <h6><font color="red">*</font> Characteristics:</h6>
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
                              data_value="111"
                              id={characteristic[0]}
                              name={characteristic[1].id}
                              onClick={this.handleCharacteristic}
                              value="1"
                              required
                            />{" "}
                          </div>
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              name={characteristic[1].id}
                              onClick={this.handleCharacteristic}
                              value="2"
                            />{" "}
                          </div>
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              name={characteristic[1].id}
                              value="3"
                            />
                          </div>{" "}
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              name={characteristic[1].id}
                              value="4"
                            />{" "}
                          </div>
                          <div className="  CharacteristicMargin">
                            <input
                              type="radio"
                              id={characteristic[0]}
                              onClick={this.handleCharacteristic}
                              name={characteristic[1].id}
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
                    <h6><font color="red">*</font>Review body</h6>
                  </div>
                  <div className="row">
                    <input
                      maxLength="1000"
                      minLength="50"
                      className="form-control"
                      type="text"
                      id="body"
                      onChange={this.handleText}
                      required
                      placeholder="Why did you like the product or not？"
                    ></input>
                  </div>
                  <div className="row">
                    <h6>Upload your photos</h6>

                  </div>
                  <h6>you can only upload 5 images</h6>
                  {this.state.AddReview.photos.length >=5?null: <ReactFilestack
  apikey={"A2l9xFCrQ4eiO9xGkZWggz"}
  onSuccess={(res) => this.handlePhoto(res)}
/>}

                    {this.state.AddReview.photos.map(photo =>
                    <img src={photo} alt="Smiley face" height="42" width="42"></img>)
                    }
                  <div className="row">
                    <h6><font color="red">*</font>What is your nick name</h6>
                  </div>
                  <div className="row">
                    <input
                      required
                      maxLength="60"
                      minLength="1"
                      className="form-control"
                      type="text"
                      id="name"
                      onChange={this.handleText}
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
                    <h6><font color="red">*</font>Your email</h6>
                  </div>
                  <div className="row">
                    <input
                      required
                      className="form-control"
                      type="email"
                      maxLength="60"
                      minLength="1"
                      id="email"
                      onChange={this.handleText}
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
                    className="QnAButton btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>

                  <button
                    type="reset"
                    onClick={this.handlePost}
                    className="QnAButton btn btn-primary "
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

import React from "react";
import { Plus } from "react-feather";
export default class RatingReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="RatingReviews">
        <div className="card ">
          <div className="card-header">RATINGS & REVIEWS</div>
          <div className="card-body"></div>
          <section className="container">
            <div className="left-half text-left">
              <h1 >Left Half</h1>
              <p>
                Weekends don't count unless you spend them doing something
                completely pointless.
              </p>
              </div>
            <div className="right-half text-left">
              <h1>Right Half</h1>
              <h3>
                If your knees aren't green by the end of the day, you ought to
                seriously re-examine your life.
              </h3>
            </div>
          </section>
          <div className="card text-center">
            <div className="card-body">
              <button className="btn btn-outline-secondary btn-lg RatingButton" style={{"margin-left":"500px"}}>
                <strong>MORE REVIEWS</strong>
              </button>
              <button className="btn btn-outline-secondary btn-lg RatingButton">
                <strong className="RightMargin">ADD A REVIEW</strong>
                <Plus color="black" size={20} style={{"margin-bottom":"5px"}}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";

export default class StyleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="styleSquareBox containerOverview">
        {this.props.styleData.results &&
          this.props.styleData.results.map(picture => {
            return (
              <div class="square">
                <img
                  className="rounded-circle"
                  id="stylePics"
                  src={picture.photos[0].url}
                  alt="mehh"
                />
              </div>
            );
          })}
      </div>
    );
  }
}

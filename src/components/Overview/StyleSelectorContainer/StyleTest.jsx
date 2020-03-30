import React from "react";
import StyleCircle from "./StyleCircle";

export default class StyleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  render() {
    return (
      <div class="styleSquareBox containerOverview">
        {this.props.styleData.results &&
          this.props.styleData.results.map((style, index) => {
            return (
              <StyleCircle
                url={style.photos[0].url}
                index={index}
                switchStyle={this.props.switchStyle}
              />
            );
          })}
      </div>
    );
  }
}

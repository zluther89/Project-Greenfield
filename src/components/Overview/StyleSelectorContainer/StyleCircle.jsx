import React from "react";

export default class StyleCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  render() {
    return (
      <div class="square">
        <div class="imageHolder">
          <img
            className="rounded-circle"
            id="Matt"
            src={this.props.url}
            alt="mehh"
            onClick={() => {
              this.props.switchStyle(this.props.index);
            }}
            onMouseOver={() => {
              console.log("hey get the hell of me");
              this.setState({ hovered: true }, () => {
                return <div>Helloooo</div>;
              });
            }}
            onMouseOut={() => {
              console.log("now stay away");
              this.setState({ hovered: false });
            }}
          />
          {this.state.hovered && <div class="overlay">✓</div>}
        </div>
      </div>
    );
  }
}

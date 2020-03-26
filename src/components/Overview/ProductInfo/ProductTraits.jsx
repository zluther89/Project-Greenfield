import React from "react";

export default class ProductTraits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.data.features &&
          this.props.data.features.map(feature => {
            return (
              <p>
                {feature.feature}: {feature.value}
              </p>
            );
          })}
      </div>
    );
  }
}

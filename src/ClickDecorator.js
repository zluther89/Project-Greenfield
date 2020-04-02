import React from "react";

const withClickTracker = Component => {
  return class extends React.Component {
    state = {
      clicks: {}
    };

    clickTracker = event => {
      let clicks = { ...this.state.clicks };
      let click = [event.target, new Date()];
      if (!clicks[Component]) {
        clicks[Component] = [click];
      } else {
        clicks[Component].push(click);
      }

      this.setState({ clicks: clicks });
    };

    render() {
      return (
        <div onClick={this.clickTracker}>
          <Component />
        </div>
      );
    }
  };
};

import React from "react";

class ClickTracker extends React.Component {
  state = {
    clicks: {}
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  clickTracker = (event, child) => {
    let component = child.type.WrappedComponent
      ? child.type.WrappedComponent.name
      : child.type.name;
    let clicks = { ...this.state.clicks };
    let click = [event.target, new Date()];
    if (!clicks[component]) {
      clicks[component] = [click];
    } else {
      clicks[component].push(click);
    }

    this.setState({ clicks: clicks });
  };

  render() {
    return (
      <>
        {React.Children.map(this.props.children, child => {
          return (
            <div onClick={event => this.clickTracker(event, child)}>
              {React.cloneElement(child)}
            </div>
          );
        })}
      </>
    );
  }
}

export default ClickTracker;

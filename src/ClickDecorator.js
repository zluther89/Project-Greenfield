import React from "react";
import Axios from "axios";

class ClickTracker extends React.Component {
  state = {
    clicks: {}
  };

  postClick = clickData => {
    return Axios.post("http://18.224.200.47/interactions/", clickData);
  };

  clickTracker = (event, child) => {
    let widget = child.type.WrappedComponent
      ? child.type.WrappedComponent.name
      : child.type.name;
    let clickObj = {
      widget: widget,
      time: new Date(),
      element: event.target.outerHTML
    };
    this.postClick(clickObj)
      .then(res => console.log(res))
      .catch(err => console.log(err));
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

import React from "react";

export default class StyleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testPics: [
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4",
        "https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4"
      ]
    };
  }

  render() {
    return (
      <div>
        <p>STYLE > SELECTED STYLE</p>
        <div class="styleSelectBox container-fluid">
          {" "}
          <div className="row">
            {" "}
            {this.state.testPics.map(pic => {
              return (
                <div class="col-xs-3 col-sm-3 col-md-3 cold-xl-3 styleCircles">
                  <img
                    display="inline-block"
                    src={pic}
                    class="rounded-circle"
                    alt="Joe"
                    float="left"
                    height="70px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

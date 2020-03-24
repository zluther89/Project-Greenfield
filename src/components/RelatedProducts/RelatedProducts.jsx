import React from "react";

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
        <div class='container'>
          <div class='col-sm-5'>
            <div class="card text-left 2-50">
            <img src='https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4'></img>
            <div class="card-body"></div>
              <div>Category</div>
              <h5 class="card-title">Product Name</h5>
              <div>Price</div>
              <div>Stars</div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

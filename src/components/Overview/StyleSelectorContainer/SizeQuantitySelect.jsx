import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ThumbsDown } from "react-feather";

export default class SizeQuantitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sizesClicked: false };
    this.populateSizes = this.populateSizes.bind(this);
  }

  populateSizes() {
    let index = this.props.currentStyle;

    let sizes = Object.keys(this.props.styleData.results[index].skus);
    let amount = Object.values(this.props.styleData.results[index].skus);
    console.log(sizes, amount, this.props.styleData.results[index]);
    return (
      this.props.styleData.results &&
      sizes.map((size, index) => {
        return (
          <Dropdown.Item href="#/action-1">
            {size} -- {amount[index]}
          </Dropdown.Item>
        );
      })
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {" "}
          <div class="col-xs-7 col-sm-7 col-md-7">
            <DropdownButton id="dropdown-basic-button-size" title="SELECT SIZE">
              {this.props.styleData &&
                this.props.styleClicked &&
                this.populateSizes()}
            </DropdownButton>
          </div>
          <div class="col-xs-5 col-sm-5 col-md-5">
            {" "}
            <DropdownButton
              id="dropdown-basic-button-quantity"
              title="SELECT QUANTITY"
            >
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              <Dropdown.Item href="#/action-3">4</Dropdown.Item>
              <Dropdown.Item href="#/action-3">5</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    );
  }
}

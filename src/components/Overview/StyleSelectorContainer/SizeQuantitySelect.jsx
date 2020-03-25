import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default class SizeQuantitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {" "}
          <div class="col-xs-7 col-sm-7 col-md-7">
            <DropdownButton id="dropdown-basic-button-size" title="SELECT SIZE">
              <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
              <Dropdown.Item href="#/action-2">S</Dropdown.Item>
              <Dropdown.Item href="#/action-3">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
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

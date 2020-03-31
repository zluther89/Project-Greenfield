import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Button from "react-bootstrap/Button";

export default class SizeQuantitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizesClicked: false,
      sizeSelected: null,
      sizeAvailable: null,
      quantitySelected: null
    };
    this.populateSizes = this.populateSizes.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.addToBagFunc = this.addToBagFunc.bind(this);
    this.showAlert = this.showAlert.bind(this);
    // this.populateQuantity = this.populateQuantity.bind(this);
  }

  populateSizes() {
    let index = this.props.currentStyle;
    let sizes = Object.keys(this.props.styleData.results[index].skus);
    let amount = Object.values(this.props.styleData.results[index].skus);

    return (
      this.props.styleData.results &&
      sizes.map((size, index) => {
        if (amount[index] > 0) {
          return (
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                this.setState({
                  sizeSelected: size,
                  sizeAvailable: amount[index]
                });
              }}
            >
              {size}
            </Dropdown.Item>
          );
        } else {
          return (
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                this.setState({
                  sizeSelected: size,
                  sizeAvailable: amount[index]
                });
              }}
            >
              {size} is Out of Stock
            </Dropdown.Item>
          );
        }
      })
    );
  }

  addToBagFunc() {
    this.showAlert();
    this.resetValues();
  }

  showAlert() {
    let alert = `You have added ${this.state.quantitySelected} ${this.state.sizeSelected} of this style to your bag`;
    window.alert(alert);
  }

  resetValues() {
    this.setState({ sizeSelected: null, quantitySelected: null });
  }

  setQuantity(num) {
    this.setState({ quantitySelected: num });
  }

  render() {
    return (
      <span className="checkoutButtons">
        {" "}
        <DropdownButton
          id="dropdown-basic-button-size"
          title={this.state.sizeSelected || "SIZE"}
          style={{ float: "left" }}
        >
          {this.props.styleData &&
            this.props.styleClicked &&
            this.populateSizes()}
        </DropdownButton>{" "}
        <DropdownButton
          id="dropdown-basic-button-quantity"
          title={this.state.quantitySelected || "QUANTITY"}
          style={{ float: "left" }}
        >
          {this.state.sizeSelected && this.state.sizeAvailable && (
            <div>
              {" "}
              <Dropdown.Item
                href="#/action-1"
                onClick={() => this.setQuantity(1)}
              >
                1
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => this.setQuantity(2)}
              >
                2
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => this.setQuantity(3)}
              >
                3
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => this.setQuantity(4)}
              >
                4
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => this.setQuantity(5)}
              >
                5
              </Dropdown.Item>
            </div>
          )}
        </DropdownButton>
        <Button
          id="button-add-to-bag"
          style={({ float: "left" }, { fontSize: "10px" }, { height: "30" })}
          onClick={() => {
            if (this.state.sizeSelected && this.state.sizeAvailable) {
              this.addToBagFunc();
            } else {
            }
          }}
        >
          ADD TO BAG
        </Button>
      </span>
    );
  }
}

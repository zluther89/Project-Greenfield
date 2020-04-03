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

    // this.populateQuantity = this.populateQuantity.bind(this);
  }

  populateQuantity() {
    return Array.apply(null, Array(this.state.sizeAvailable)).map(
      (val, index) => {
        if (index <= 14) {
          return (
            <Dropdown.Item onClick={() => this.setQuantity(index + 1)}>
              {index + 1}
            </Dropdown.Item>
          );
        }
      }
    );
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
              key={index}
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
              key={index}
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

  async addToBagFunc(size, quantity, style, styleName, productName) {
    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
    let price = this.props.price;
    if (this.props.salePrice > 0) {
      price = this.props.salePrice;
    }
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.push([quantity, size, style, styleName, productName, price]);
    window.localStorage.setItem("cart", JSON.stringify(cart));

    // let newStorage = currentStorage.push("you");
    // console.log(newStorage);

    this.resetValues();
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
          {!this.props.styleClicked && (
            <Dropdown.Item>Select Style</Dropdown.Item>
          )}
          {this.props.styleData &&
            this.props.styleClicked &&
            this.populateSizes()}
        </DropdownButton>{" "}
        <DropdownButton
          id="dropdown-basic-button-quantity"
          title={this.state.quantitySelected || "QUANTITY"}
          style={{ float: "left" }}
        >
          {!this.state.sizeSelected && (
            <Dropdown.Item>Select Size</Dropdown.Item>
          )}
          <div>
            {this.state.sizeSelected &&
              this.state.sizeAvailable &&
              this.populateQuantity()}
          </div>
        </DropdownButton>
        {this.state.sizeSelected && this.state.quantitySelected ? (
          <Button
            id="button-add-to-bag"
            style={({ float: "left" }, { fontSize: "10px" }, { height: "30" })}
            onClick={() => {
              if (this.state.sizeSelected && this.state.sizeAvailable) {
                this.addToBagFunc(
                  this.state.sizeSelected,
                  this.state.quantitySelected,
                  this.props.currentStyle,
                  this.props.currentStyleName,
                  this.props.currentProductName
                );
              } else {
              }
            }}
          >
            ADD TO BAG
          </Button>
        ) : (
          <Button id="dropdown-basic-button-quantity">
            <div id="incorrectAddtoBag">ADD TO BAG </div>
          </Button>
        )}
      </span>
    );
  }
}

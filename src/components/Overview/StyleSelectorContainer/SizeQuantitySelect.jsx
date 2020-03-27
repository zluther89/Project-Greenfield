import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ThumbsDown } from "react-feather";

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
    // this.populateQuantity = this.populateQuantity.bind(this);
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
          <Dropdown.Item
            href="#/action-1"
            onClick={() => {
              this.setState({
                sizeSelected: size,
                sizeAvailable: amount[index]
              });
            }}
          >
            {size} -- {amount[index]}
          </Dropdown.Item>
        );
      })
    );
  }

  setQuantity(num) {
    this.setState({ quantitySelected: num });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {" "}
          <div class="col-xs-7 col-sm-7 col-md-7">
            <DropdownButton
              id="dropdown-basic-button-size"
              title={this.state.sizeSelected || "SELECT SIZE"}
            >
              {this.props.styleData &&
                this.props.styleClicked &&
                this.populateSizes()}
            </DropdownButton>
          </div>
          <div class="col-xs-5 col-sm-5 col-md-5">
            {" "}
            <DropdownButton
              id="dropdown-basic-button-quantity"
              title={this.state.quantitySelected || "SELECT QUANTITY"}
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
          </div>
        </div>
      </div>
    );
  }
}

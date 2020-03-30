import React from "react";
import Banner from "./Banner";
import ProductInfo from "./ProductInfo/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import StyleSelectorContainer from "./StyleSelectorContainer/StyleSelectorContainer";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { getNewProductThunk } from "../../components/Redux/ThunkMiddleware";

import { connect } from "react-redux";
import ImageModal from "../Overview/ImageGallery/ImageModal";

const mapDispatchToProps = dispatch => {
  return {
    getNewProductThunk: id => dispatch(getNewProductThunk(id))
  };
};

const mapStateToProps = state => ({
  currentProduct: state.selectedProduct
});

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      styleData: {},
      currentProduct: 3,
      currentStyle: 0,
      styleClicked: false,
      currentPrice: null,
      salePrice: null,
      modalShow: false
    };
    this.switchStyle = this.switchStyle.bind(this);
  }

  switchStyle(val) {
    let price = this.state.styleData.results[val].original_price;
    let salePrice = this.state.styleData.results[val].sale_price;
    console.log("price", price);
    this.setState({
      currentStyle: val,
      styleClicked: true,
      currentPrice: price,
      salePrice: salePrice
    });
  }

  componentDidMount() {
    return this.props.getNewProductThunk("3").then(response => {
      let productId = this.props.currentProduct.id;
      axios
        .get(`http://3.134.102.30/products/${productId}`)
        .then(response => {
          console.log(productId);
          this.setState({
            data: response.data,
            currentPrice: response.data.default_price
          });
          return axios.get(`http://3.134.102.30/products/${productId}/styles`); // using response.data
        })
        .then(response => {
          this.setState({ styleData: response.data });
        });
    });
  }

  render() {
    return (
      <div className="overviewWidget">
        <div className="overviewFull">
          <div className="overviewBanner">
            {" "}
            <Banner />
          </div>

          <div className="overviewMain container-fluid">
            <>
              <ImageModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                currentStyle={this.state.currentStyle}
                data={this.state.data}
                styleData={this.state.styleData}
              />
            </>
            <div className="row overviewRow">
              <div className="imageGallery col-xs-7 col-sm-7 col-md-7">
                <ImageGallery
                  data={this.state.data}
                  styleData={this.state.styleData}
                  currentStyle={this.state.currentStyle}
                  setModal={() => {
                    this.setState({ modalShow: true });
                  }}
                />
              </div>
              <div className="productInfo col-xs-5 col-sm-5 col-md-5">
                <StyleSelectorContainer
                  data={this.state.data}
                  styleData={this.state.styleData}
                  switchStyle={this.switchStyle}
                  currentStyle={this.state.currentStyle}
                  styleClicked={this.state.styleClicked}
                  price={this.state.currentPrice}
                  salePrice={this.state.salePrice}
                />
              </div>
            </div>
          </div>
          <div className="overviewBottom">
            <ProductInfo data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

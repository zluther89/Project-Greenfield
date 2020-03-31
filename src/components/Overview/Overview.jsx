import React from "react";
import Banner from "./Banner";
import ProductInfo from "./ProductInfo/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import StyleSelectorContainer from "./StyleSelectorContainer/StyleSelectorContainer";
// import Button from "react-bootstrap/Button";
import axios from "axios";
import { getNewProductThunk } from "../../components/Redux/ThunkMiddleware";

import { connect } from "react-redux";
import ImageModal from "../Overview/ImageGallery/ImageModal";
import queryString from "query-string";

const mapDispatchToProps = dispatch => {
  return {
    getNewProductThunk: id => dispatch(getNewProductThunk(id))
  };
};

const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      styleData: {},
      currentProduct: 3,
      currentStyle: 0,
      currentStyleName: "",
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
    this.setState({
      currentStyle: val,
      currentStyleName: this.state.styleData.results[val].name,
      styleClicked: true,
      currentPrice: price,
      salePrice: salePrice
    });
  }

  componentDidMount() {
    let productId = this.props.productId || 3;

    this.props.getNewProductThunk(productId);

    axios
      .get(`http://3.134.102.30/products/${productId}`)
      .then(response => {
        this.setState({
          data: response.data,
          currentPrice: response.data.default_price
        });
        return axios.get(`http://3.134.102.30/products/${productId}/styles`); // using response.data
      })
      .then(response => {
        this.setState({ styleData: response.data });
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
                  currentStyleName={this.state.currentStyleName}
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

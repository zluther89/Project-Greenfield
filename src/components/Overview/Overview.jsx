import React from "react";
import Banner from "./Banner";
import ProductInfo from "./ProductInfo/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import StyleSelectorContainer from "./StyleSelectorContainer/StyleSelectorContainer";
import axios from "axios";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      styleData: {},
      currentProduct: 3,
      currentStyle: 0,
      styleClicked: false,
      currentPrice: null,
      salePrice: null
    };
    this.switchStyle = this.switchStyle.bind(this);
  }

  switchStyle(val) {
    console.log(val);
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
    axios
      .get(`http://3.134.102.30/products/${this.state.currentProduct}`)
      .then(response => {
        console.log("productData", response.data);
        this.setState({
          data: response.data,
          currentPrice: response.data.default_price
        });
        return axios.get(
          `http://3.134.102.30/products/${this.state.currentProduct}/styles`
        ); // using response.data
      })
      .then(response => {
        console.log("styleData", response.data);
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
            <div className="row overviewRow">
              <div className="imageGallery col-xs-7 col-sm-7 col-md-7">
                <ImageGallery
                  data={this.state.data}
                  styleData={this.state.styleData}
                  currentStyle={this.state.currentStyle}
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

import React from "react";
import Banner from "./Banner";
import ProductInfo from "./ProductInfo/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import StyleSelectorContainer from "./StyleSelectorContainer/StyleSelectorContainer";
import axios from "axios";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, styleData: {} };
  }

  componentDidMount() {
    axios
      .get("http://3.134.102.30/products/3")
      .then(response => {
        this.setState({ data: response.data });
        return axios.get("http://3.134.102.30/products/3/styles"); // using response.data
      })
      .then(response => {
        console.log(response.data);
        this.setState({ styleData: response.data });
      });
  }

  render() {
    return (
      <div>
        <div className="overviewFull">
          <div className="overviewBanner">
            {" "}
            <Banner />
          </div>
          <div className="overviewMain container-fluid">
            <div className="row overviewRow">
              <div className="imageGallery col-xs-7 col-sm-7 col-md-7">
                <ImageGallery />
              </div>
              <div className="productInfo col-xs-5 col-sm-5 col-md-5">
                <StyleSelectorContainer
                  data={this.state.data}
                  styleData={this.state.styleData}
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

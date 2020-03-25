import React from "react";
import Banner from "./Banner";
import ProductInfo from "./ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import StyleSelector from "./StyleSelector";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="overviewFull">
          <div class="overviewBanner">
            {" "}
            <Banner />
          </div>
          <div className="overviewMain container-fluid">
            <div class="row overviewRow">
              <div className="imageGallery col-xs-7 col-sm-7 col-md-7">
                <ImageGallery />
              </div>
              <div className="productInfo col-xs-5 col-sm-5 col-md-5">
                <StyleSelector />
              </div>
            </div>
          </div>
          <div className="overviewBottom">
            <ProductInfo />
          </div>
        </div>
      </div>
    );
  }
}

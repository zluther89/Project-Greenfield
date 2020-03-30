import React from "react";
import Carousel from "./CarouselTest";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="carouselContainer">
        <div className="imageCarousel">
          <button
            id="compareButtonOverview"
            value="1"
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              this.props.setModal();
            }}
          >
            Expand
          </button>{" "}
          <Carousel
            data={this.props.data}
            styleData={this.props.styleData}
            currentStyle={this.props.currentStyle}
          />
        </div>
      </div>
    );
  }
}

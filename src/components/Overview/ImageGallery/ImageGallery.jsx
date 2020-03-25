import React from "react";
import Carousel from "./Carousel";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="carouselContainer">
        <div className="imageCarousel">
          {" "}
          <Carousel />
        </div>
      </div>
    );
  }
}

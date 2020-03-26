import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  renderCarousel() {
    let style = this.props.currentStyle;
    console.log("stttttyyyylllle", style);
    return this.props.styleData.results[style].photos.map(picture => {
      return (
        <Carousel.Item>
          <img
            className="overview d-block w-100 img-fluid align-content-center mx-auto"
            src={picture.url}
            alt="First slide"
          />
        </Carousel.Item>
      );
    });
  }

  render() {
    return (
      <Carousel
        id="overviewCarousel"
        autoPlay={false}
        interval={1000000}
        controls={true}
        indicators={true}
        hover={false}
      >
        {this.props.styleData.results && this.renderCarousel()}
      </Carousel>
    );
  }
}

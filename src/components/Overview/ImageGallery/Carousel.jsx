import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Carousel
        autoPlay={false}
        interval={1000000}
        controls={true}
        indicators={true}
        hover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid align-content-center mx-auto"
            src="https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid align-content-center mx-auto"
            src="https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid align-content-center mx-auto"
            src="https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

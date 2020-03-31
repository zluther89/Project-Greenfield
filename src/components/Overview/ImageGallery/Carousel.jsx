import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ImageCarousel(){


  const renderCarousel = () => {
    let style = props.currentStyle;

    return props.styleData.results[style].photos.map(picture => {
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
        {props.styleData.results && renderCarousel()}
      </Carousel>
    );
  }
}

  /* <div class="row hidden-xs" id="slider-thumbs">
<!-- Bottom switcher of slider -->
<ul class="hide-bullets">
    <li class="col-sm-2">
        <a class="thumbnail" id="carousel-selector-0"><img src="http://placehold.it/170x100&amp;text=one"></a>
    </li>

    <li class="col-sm-2">
        <a class="thumbnail" id="carousel-selector-1"><img src="http://placehold.it/170x100&amp;text=two"></a>
    </li>

    <li class="col-sm-2">
        <a class="thumbnail" id="carousel-selector-2"><img src="http://placehold.it/170x100&amp;text=three"></a>
    </li>

    <li class="col-sm-2">
        <a class="thumbnail" id="carousel-selector-3"><img src="http://placehold.it/170x100&amp;text=four"></a>
    </li>

    <li class="col-sm-2">
        <a class="thumbnail" id="carousel-selector-4"><img src="http://placehold.it/170x100&amp;text=five"></a>
    </li>

    <li class="col-sm-2">
        <a class="thumbnail" id="carousel-selector-5"><img src="http://placehold.it/170x100&amp;text=six"></a>
    </li>
</ul>                 
</div> */


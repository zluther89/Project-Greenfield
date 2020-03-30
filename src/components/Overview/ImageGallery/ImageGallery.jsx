import React from "react";
import Carousel from "./CarouselTest";

export default function ImageGallery(props) {
  return (
    <div className="carouselContainer">
      <div className="imageCarousel">
        <button
          id="compareButtonOverview"
          value="1"
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            props.setModal();
          }}
        >
          <i class="fa fa-expand"></i>
        </button>{" "}
        <Carousel
          data={props.data}
          styleData={props.styleData}
          currentStyle={props.currentStyle}
        />
      </div>
    </div>
  );
}

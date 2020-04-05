import React from "react";
import Carousel from "./ControlledCarousel";

//The image gallery is a container for the left side of the overview section

//It holds components such as the carousel and thumbnail row

export default function ImageGallery(props) {
  return (
    <div className="carouselContainer">
      <div className="imageCarousel">
        <button
          id="compareButtonOverview"
          value="1"
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            props.setModal();
          }}
        >
          <i className="fa fa-expand"></i>
        </button>{" "}
        <Carousel
          //passing down currentProduct data, stlyeData, and the id of the current selected style
          //when the currentStyle changes the carousel will rerender with the currentStyle as the argument
          //so the carousel will show the images of that style
          data={props.data}
          styleData={props.styleData}
          currentStyle={props.currentStyle}
        />
      </div>
    </div>
  );
}

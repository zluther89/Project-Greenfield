import React from "react";

export default function ImageCarousel(props) {
  const renderCarousel = () => {
    let style = props.currentStyle;

    return (
      <div
        id="carousel-thumb"
        className="carousel slide carousel-fade carousel-thumbnails"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          {props.styleData.results[style].photos.map((picture, index) => {
            if (index === 0) {
              console.log("index is zero");
              return (
                <div key={index} className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={picture.url}
                    alt="First slide"
                    data-slide-to
                  />
                </div>
              );
            } else {
              return (
                <div key={index} className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={picture.url}
                    alt="First slide"
                  />
                </div>
              );
            }
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel-thumb"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-thumb"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };

  return (
    <div className="container xcontainer">
      <div className="box thumbnailBox stack-top">
        {props.styleData.results && renderThumbnails()}{" "}
      </div>
      <div className="box carouselBox">
        {" "}
        {props.styleData.results && renderCarousel()}
      </div>
    </div>
  );
}

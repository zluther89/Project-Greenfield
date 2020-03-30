import React from "react";

export default function ImageCarousel(props) {
  const renderCarousel = () => {
    let style = props.currentStyle;

    return props.styleData.results[style].photos.map((picture, index) => {
      if (index < 1) {
        return (
          <div class="carousel-item active">
            <img class="d-block w-100" src={picture.url} alt="First slide" />
          </div>
        );
      } else {
        return (
          <div class="carousel-item">
            <img class="d-block w-100" src={picture.url} alt="First slide" />
          </div>
        );
      }
    });
  };

  const renderThumbnails = () => {
    let style = props.currentStyle;

    return props.styleData.results[style].photos.map((picture, index) => {
      if (index < 1) {
        return (
          <img
            data-target="#carousel-thumb"
            data-slide-to={index}
            class="d-block thumbPic"
            src={picture.url}
            alt="thumb"
          />
        );
      } else {
        return (
          <img
            data-target="#carousel-thumb"
            data-slide-to={index}
            class="d-block "
            src={picture.url}
            alt="thumb"
            //   class="img-fluid"
          />
        );
      }
    });
  };

  return (
    <div class="container my-4">
      <div class="row carouselRows">
        <div class="col-sm-2 thumbnailContainer">
          {props.styleData.results && renderThumbnails()}{" "}
        </div>
        <div class="col-sm-10">
          {" "}
          <div
            id="carousel-thumb"
            class="carousel slide carousel-fade carousel-thumbnails"
            data-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              {props.styleData.results && renderCarousel()}
            </div>

            <a
              class="carousel-control-prev"
              href="#carousel-thumb"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-thumb"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

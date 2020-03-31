import React from "react";

export default function ImageCarousel(props) {
  const renderCarousel = () => {
    let style = props.currentStyle;

    return props.styleData.results[style].photos.map((picture, index) => {
      if (index < 1) {
        return (
          <div key={index} className="carousel-item active">
            <img className="d-block w-100" src={picture.url} alt="First slide" />
          </div>
        );
      } else {
        return (
          <div key={index} className="carousel-item">
            <img className="d-block w-100" src={picture.url} alt="First slide" />
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
            key = {index}
            data-target="#carousel-thumb"
            data-slide-to={index}
            className="d-block thumbPic"
            src={picture.url}
            alt="thumb"
          />
        );
      } else {
        return (
          <img
            key={index}
            data-target="#carousel-thumb"
            data-slide-to={index}
            className="d-block "
            src={picture.url}
            alt="thumb"
            //   className="img-fluid"
          />
        );
      }
    });
  };

  return (
// <<<<<<< cleanup
//     <div className="container my-4">
//       <div className="row carouselRows">
//         <div className="col-sm-2 thumbnailContainer">
//           {props.styleData.results && renderThumbnails()}{" "}
//         </div>
//         <div className="col-sm-10">
//           {" "}
//           <div
//             id="carousel-thumb"
//             className="carousel slide carousel-fade carousel-thumbnails"
//             data-ride="carousel"
//           >
//             <div className="carousel-inner" role="listbox">
//               {props.styleData.results && renderCarousel()}
//             </div>

//             <a
//               className="carousel-control-prev"
//               href="#carousel-thumb"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a
//               className="carousel-control-next"
//               href="#carousel-thumb"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="sr-only">Next</span>
//             </a>
// =======
    <div class="container xcontainer">
      <div class="box thumbnailBox stack-top">
        {props.styleData.results && renderThumbnails()}{" "}
      </div>
      <div class="box carouselBox">
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel-thumb"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

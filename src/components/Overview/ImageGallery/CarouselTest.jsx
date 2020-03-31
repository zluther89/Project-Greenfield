import React from "react";

export default function ImageCarousel(props) {
  const renderCarousel = () => {
    let style = props.currentStyle;

    return props.styleData.results[style].photos.map((picture, index) => {
      if (index < 1) {
        return (
<<<<<<< HEAD
          <div className="carousel-item active">
=======
          <div key={index} className="carousel-item active">
>>>>>>> 81542bb7cfd3b37939485fffa65d1251df00d7ad
            <img className="d-block w-100" src={picture.url} alt="First slide" />
          </div>
        );
      } else {
        return (
<<<<<<< HEAD
          <div className="carousel-item">
=======
          <div key={index} className="carousel-item">
>>>>>>> 81542bb7cfd3b37939485fffa65d1251df00d7ad
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
<<<<<<< HEAD
    <div className="container xcontainer">
      <div className="box thumbnailBox stack-top">
=======
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
>>>>>>> 81542bb7cfd3b37939485fffa65d1251df00d7ad
        {props.styleData.results && renderThumbnails()}{" "}
      </div>
      <div className="box carouselBox">
        {" "}
        <div
          id="carousel-thumb"
          className="carousel slide carousel-fade carousel-thumbnails"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {props.styleData.results && renderCarousel()}

          </div>

          <a
            className="carousel-control-prev"
            href="#carousel-thumb"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-thumb"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

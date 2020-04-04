import React, { useState, useEffect } from "react";

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalCarousel from "./ModalCarousel";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const changeIndex = () => {
    setIndex(0);
    return 0;
  };

  const renderThumbnails = () => {
    let style = props.currentStyle;

    return props.styleData.results[style].photos.map((picture, index) => {
      return (
        <img
          className="d-block "
          src={picture.url}
          alt="thumb"
          onClick={() => setIndex(index)}
          //   className="img-fluid"
        />
      );
    });
  };
  return props.styleData.results ? (
    <div className="container xcontainer">
      <Carousel
        autoPlay={false}
        interval={5000}
        /* This was one of the toughest challenges of this project early on
    I had originally used regular bootstrap which would set an :active CSS selector on the current image div
    the issue was that switching to an image which had less images than the current one
      ex. current image is the 6th image of a style, switching to a style with only four images would lead to an empty/broken Carousel
    I needed to find a way to reset the index to zero if needed
      I achieved this by switching to react-bootstrap which offered an activeIndex functionality that I could edit much more easily */

        activeIndex={
          index >= props.styleData.results[props.currentStyle].photos.length
            ? changeIndex()
            : index
        }
        onSelect={handleSelect}
      >
        {" "}
        {props.styleData.results[props.currentStyle].photos.map((picture) => {
          return (
            <Carousel.Item>
              <img
                onClick={() => {}}
                className="d-block w-100 "
                src={picture.url}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="box thumbnailBox stack-top">
        {props.styleData.results && renderThumbnails()}{" "}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

// The z-index of the thumbnail row div is higher than the carousel behind it allowing users to interact and scroll through the thumbnail row

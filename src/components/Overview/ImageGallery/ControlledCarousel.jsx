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

  useEffect(() => {
    if (props.styleData.results) {
      console.log(
        "styleData",
        props.styleData.results[props.currentStyle].photos
      );
      console.log("index", index);
    }
  });

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
        activeIndex={
          index >= props.styleData.results[props.currentStyle].photos.length
            ? changeIndex()
            : index
        }
        onSelect={handleSelect}
      >
        {" "}
        {props.styleData.results[props.currentStyle].photos.map(picture => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
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

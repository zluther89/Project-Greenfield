import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ControlledCarousel = props => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.styleData.results[props.style].photos.map((picture, index) => {
        return (
          <Carousel.Item key={index} className="modalItem">
            <img className="modalImage" src={picture.url} alt="modalImg" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ControlledCarousel;

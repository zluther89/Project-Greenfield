import React, { useState, useEffect } from "react";

export default function StyleCircle(props) {
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(props.clicked);
  // This will launch only if propName value has chaged.

  function styleChange(index) {
    props.switchStyle(index);
    props.changeSelectedStyle(index);
  }
  useEffect(() => {
    setClicked(props.clicked);
  }, [props.clicked]);
  if (props.val === "selected") {
    return (
      <div className="square" key={clicked}>
        <div className="imageHolder">
          <img
            className="rounded-circle"
            id="Matt"
            src={props.url}
            alt="a"
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseOut={() => {
              setHover(false);
            }}
            onClick={() => {
              styleChange(props.index);
            }}
          />
          {(hovered || clicked) && <div className="overlay">✓</div>}
        </div>
      </div>
    );
  } else {
    return (
      <div className="square" key={clicked}>
        <div className="imageHolder">
          <img
            className="rounded-circle"
            id="selectedStyleCircle"
            src={props.url}
            alt="mehh"
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseOut={() => {
              setHover(false);
            }}
            onClick={() => {
              styleChange(props.index);
            }}
          />
          {(hovered || clicked) && <div className="overlay">✓</div>}
        </div>
      </div>
    );
  }
}

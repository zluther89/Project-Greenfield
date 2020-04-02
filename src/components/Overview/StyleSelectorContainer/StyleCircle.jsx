import React, { useState, useEffect } from "react";

export default function StyleCircle(props) {
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(props.clicked);
  // This will launch only if propName value has chaged.
  useEffect(() => {
    setClicked(props.clicked);
  }, [props.clicked]);

  return (
    <div className="square" key={clicked}>
      <div className="imageHolder">
        <img
          className="rounded-circle"
          id="Matt"
          src={props.url}
          alt="mehh"
          onClick={() => {
            props.switchStyle(props.index);
          }}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
        />
        {(hovered || clicked) && <div className="overlay">✓</div>}
      </div>
    </div>
  );
}

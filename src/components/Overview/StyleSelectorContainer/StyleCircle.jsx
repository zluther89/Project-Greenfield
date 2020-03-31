import React, { useState } from "react";

export default function StyleCircle(props) {
  const [hovered, setHover] = useState(false);

  return (
    <div className="square">
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
        {hovered && <div className="overlay">✓</div>}
      </div>
    </div>
  );
}

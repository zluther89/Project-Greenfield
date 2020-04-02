import React, { useState, useEffect } from "react";
import StyleCircle from "./StyleCircle";

export default function StyleTest(props) {
  const [selectedStyle, changeStyle] = useState(0);

  function changeSelectedStyle(val) {
    changeStyle(val);
  }

  useEffect(() => {}, [selectedStyle]);

  const [clicked, setClicked] = useState(false);
  return (
    <div className="styleSquareBox containerOverview">
      {props.styleData.results &&
        props.styleData.results.map((style, index) => {
          if (index === selectedStyle) {
            return (
              <StyleCircle
                key={index}
                url={style.photos[0].url}
                index={index}
                switchStyle={props.switchStyle}
                onClick={() => setClicked(true)}
                clicked={clicked}
                changeSelectedStyle={changeSelectedStyle}
                val={"selected"}
              />
            );
          } else {
            return (
              <StyleCircle
                key={index}
                url={style.photos[0].url}
                index={index}
                switchStyle={props.switchStyle}
                onClick={() => setClicked(true)}
                clicked={clicked}
                changeSelectedStyle={changeSelectedStyle}
              />
            );
          }
        })}
    </div>
  );
}

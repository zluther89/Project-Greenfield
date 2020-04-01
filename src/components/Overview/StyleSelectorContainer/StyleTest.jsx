import React, { useState } from "react";
import StyleCircle from "./StyleCircle";

export default function StyleTest(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="styleSquareBox containerOverview">
      {props.styleData.results &&
        props.styleData.results.map((style, index) => {
          return (
            <StyleCircle
              key={index}
              url={style.photos[0].url}
              index={index}
              switchStyle={props.switchStyle}
              onClick={(() => setClicked(true), console.log("clicked"))}
              clicked={clicked}
            />
          );
        })}
    </div>
  );
}

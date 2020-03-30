import React from "react";
import StyleCircle from "./StyleCircle";

export default function StyleTest(props) {
  return (
    <div class="styleSquareBox containerOverview">
      {props.styleData.results &&
        props.styleData.results.map((style, index) => {
          return (
            <StyleCircle
              url={style.photos[0].url}
              index={index}
              switchStyle={props.switchStyle}
            />
          );
        })}
    </div>
  );
}

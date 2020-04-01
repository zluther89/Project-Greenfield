import ShowStars from "../../OverlapWork/ShowStars";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function OverviewStars(props) {
  return (
    <span style={{ display: "flex" }}>
      <ShowStars />
      <div style={{ marginLeft: "10px" }}>
        <li
          onClick={() => {
            let element = document
              .getElementById("reviewsBox")
              .scrollIntoView();
            console.log(element);
          }}
        >
          Read All Reviews
        </li>
      </div>
    </span>
  );
}

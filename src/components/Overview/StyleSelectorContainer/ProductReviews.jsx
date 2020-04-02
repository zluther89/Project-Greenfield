import ShowStars from "../../OverlapWork/ShowStars";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function OverviewStars(props) {
  let reviews = JSON.parse(localStorage.getItem("reviews"));
  return (
    <div id="starsBox">
      {" "}
      <div id="theStars">
        <ShowStars />{" "}
      </div>
      <div id="linkToReviews">
        {" "}
        <a
          onClick={() => {
            let element = document
              .getElementById("reviewsBox")
              .scrollIntoView();
            console.log(element);
          }}
        >
          Read {reviews} Reviews
        </a>
      </div>
    </div>
  );
}

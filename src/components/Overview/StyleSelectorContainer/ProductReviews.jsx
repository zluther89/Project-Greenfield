import ShowStars from "../../OverlapWork/ShowStars";
import React from "react";

export default function OverviewStars(props) {
  let reviews = JSON.parse(localStorage.getItem("reviews"));
  let element = document.getElementById("reviewsBox")
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
            return element.scrollIntoView({
                behavior: "smooth"
              });
       
          }}
          href='javascript:void(0)'
        >
          Read {reviews} Reviews
        </a>
      </div>
    </div>
  );
}

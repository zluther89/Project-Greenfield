import ShowStars from "../../OverlapWork/ShowStars";
import React from "react";

export default function OverviewStars(props) {
  return (
    <span style={{ display: "flex" }}>
      <ShowStars />
      <div style={{ marginLeft: "10px" }}>Read All Reviews</div>
    </span>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function SocialLinks(props) {
  return (
    <span>
      {" "}
      <a target="_blank" href="https://www.facebook.com/forever404">
        <i className="fa fa-facebook-square" style={{ fontSize: "40px" }}></i>
      </a>
      <a target="_blank" href="https://www.twitter.com/forever404">
        <i className="fa fa-twitter-square" style={{ fontSize: "40px" }}></i>
      </a>
      <a target="_blank" href="https://www.instagram.com/forever404">
        <i className="fa fa-instagram" style={{ fontSize: "40px" }}></i>
      </a>
    </span>
  );
}

export default SocialLinks;

import React from "react";
const ProductBreakdown = ({ characteristics }) => {
  return characteristics.map(characteristic => {
    if (characteristic[0] === "Quality") {
      return (
        <div key={characteristic[1].id} className="container">
          {/* title */}
          <div className="row align-items-start">{characteristic[0]}</div>
          {/* progress bar */}
          <div className="row align-items-center">
            <div className="col">
            <div className="progress border-0  grade-product-bar " >
        <div className="progress-bar " style={{ "width": `${characteristic[1].value*20}%`,"backgroundColor":"grey" }} role="progressbar" aria-valuemin="0" aria-valuemax="100" ><div className="grade-product-img" ></div></div>
</div>
            </div>
          </div>
          <div class="row align-items-end">
            <div class="col">
              <p>poor</p>
            </div>
            <div class="col">
              <p></p>
            </div>
            <div class="col RightText">
              <p>great</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={characteristic[1].id} className="container">
          {/* title */}
          <div className="row align-items-start">{characteristic[0]}</div>
          {/* progress bar */}
          <div className="row align-items-center">
            <div className="col">
            <div className="progress border-0  grade-product-bar " >
        <div className="progress-bar " style={{ "width": `${characteristic[1].value*20}%`,"backgroundColor":"grey" }} role="progressbar" aria-valuemin="0" aria-valuemax="100" ><div className="grade-product-img" ></div></div>
</div>
            </div>
          </div>

          <div class="row align-items-end">
            <div class="col">
              <p>Too small</p>
            </div>
            <div class="col CenterText">
              <p>Perfect</p>
            </div>
            <div class="col RightText">
              <p>Too large</p>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default ProductBreakdown;

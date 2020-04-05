import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Cart from "../../components/Overview/Cart/Cart";

export default function Banner() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "black" }}
    >
      <div className="container jumbotronContainer">
        {" "}
        <h1 className="display-5">
          forever404{"                     "}
          <span>
            <i
              className="fa fa-shopping-bag"
              id="cartIcon"
              onClick={() => setModalShow(true)}
            ></i>

            <p id="companySlogan">
              Can't find what you're looking for? Let us help
            </p>
          </span>
          <Cart show={modalShow} onHide={() => setModalShow(false)} />
        </h1>
      </div>
    </div>
  );
}

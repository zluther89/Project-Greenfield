import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BagProduct from "./BagProduct";

//The cart is a feature that I added towards the end of development

//Whenever a user adds a product to their cart all the information of that purchase gets placed in local storage

export default function CartModal(props) {
  function bagContents() {
    let newCart = JSON.parse(localStorage.getItem("cart"));
    if (!newCart) {
      newCart = [];
    }

    return newCart.map((content) => {
      return <BagProduct content={content} />;
    });
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{bagContents()}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

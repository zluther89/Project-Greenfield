import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BagProduct from "./BagProduct";

export default function CartModal(props) {
  const [price, changePrice] = useState(0);
  function bagContents() {
    let newCart = JSON.parse(localStorage.getItem("cart"));
    if (!newCart) {
      newCart = [];
    }

    return newCart.map(content => {
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

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalCarousel from "./ModalCarousel";
let ImageModal = props => {
  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
    >
      {/* <Modal.Header closeButton>
     <Modal.Title id="contained-modal-title-vcenter">
       <Button onClick={props.onHide}>Close</Button>
     </Modal.Title>
   </Modal.Header> */}
      <Container>
        <Row>
          <Col xs={11}>
            {" "}
            <ModalCarousel
              style={props.currentStyle}
              styleData={props.styleData}
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default ImageModal;

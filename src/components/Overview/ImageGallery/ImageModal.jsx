import React from "react";
import Modal from "react-bootstrap/Modal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalCarousel from "./ModalCarousel";

//The imageModal shows an expanded carousel

//i decided that using a modal was a cleaner way of writing code, rather than using conditional resizing of the image carousel

//the carousel does not have a thumbnail row, but i have set this component up in a way that one could be easily added if desired

let ImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Container className="modalBackground">
        <Row className="overviewModalRow">
          <Col xs={12}>
            {" "}
            <ModalCarousel
              style={props.currentStyle}
              styleData={props.styleData}
            />
          </Col>
          <Col xs={0}></Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default ImageModal;

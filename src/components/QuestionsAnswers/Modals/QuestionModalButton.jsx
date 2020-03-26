import React from "react";
import QuestionModal from "./QuestionModal.jsx";
import Button from "react-bootstrap/Button";

class QuestionModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  setModalShow(boolean) {
    this.setState({
      modalShow: boolean
    });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={() => this.setModalShow(true)}>
          Add A question +
        </Button>

        <QuestionModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </>
    );
  }
}

export default QuestionModalButton;

import React from "react";
import QuestionModal from "./QuestionModal.jsx";
import Button from "react-bootstrap/Button";

class QandAModalButton extends React.Component {
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
    let button =
      this.props.type === "question" ? (
        <Button variant="primary" onClick={() => this.setModalShow(true)}>
          Add A question +
        </Button>
      ) : (
        <div variant="primary" onClick={() => this.setModalShow(true)}>
          Answer
        </div>
      );
    return (
      <>
        {button}

        <QuestionModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </>
    );
  }
}

export default QandAModalButton;

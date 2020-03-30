import React from "react";
import QuestionModal from "./QandAModal";
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
  componentDidMount() {
    console.log("props from qAndAmodalbutton ", this.props);
  }

  render() {
    let button =
      this.props.type === "question" ? (
        <Button
          className="QnAButton"
          variant="primary"
          onClick={() => this.setModalShow(true)}
        >
          Add a question +
        </Button>
      ) : (
        <div variant="primary" onClick={() => this.setModalShow(true)}>
          Answer
        </div>
      );
    let action = this.props.type === "question" ? "question" : "answer";
    return (
      <>
        {button}
        <QuestionModal
          questionID={this.props.questionID}
          type={action}
          setAnswers={this.props.setAnswers}
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </>
    );
  }
}

export default QandAModalButton;

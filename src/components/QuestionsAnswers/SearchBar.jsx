import React from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form style={{ width: "100%" }}>
          <Form.Group controlId="QuestionSearch">
            <Form.Label>Questions and Answers</Form.Label>
            <Form.Control
              type="question"
              placeholder=" Have a Question? Search for answers..."
              size="sm"
              onChange={e => this.props.handler(e)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;

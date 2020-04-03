import React from "react";
import Form from "react-bootstrap/Form";

const SearchBar = props => {
  return (
    <div>
      <Form style={{ width: "100%" }}>
        <Form.Group controlId="QuestionSearch">
          <br/>
          <Form.Label><h2>Questions & Answers</h2></Form.Label>
          <br/>
          <Form.Control
          style={{ width: "100%" }}
            type="question"
            placeholder=" Have a Question? Search for answers..."
            size="sm"
            onChange={e => props.handler(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;

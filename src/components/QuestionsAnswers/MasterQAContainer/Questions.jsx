import React from "react";
import Table from "react-bootstrap/Table";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Table borderless responsive>
          <tbody>
            <tr>
              <td>Q:</td>
              <td>This is a question??</td>
            </tr>
            <tr>
              <td>A:</td>
              <td>This is an answer!</td>
            </tr>
            <tr>
              <td></td>
              <td>This is another answer!!!! ANSWER</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Questions;

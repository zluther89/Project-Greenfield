import React from "react";
import Answers from "./Answers";
import Helpful from "./Helpful";

const Question = props => {
  let answers = [];
  for (let key in props.q.answers) {
    answers.push(props.q.answers[key]);
  }
  let questionID = props.q.question_id;
  console.log("questionId", questionID);
  console.log("props.q", props.q);
  return (
    <tbody>
      <tr>
        <td>Q:</td>
        <td>
          {props.q.question_body}
          <div className="helpfulContainer">
            <Helpful questionID={questionID} type="answer" />
          </div>
        </td>
      </tr>
      <Answers answers={answers} key={questionID} />
    </tbody>
  );
};

export default Question;

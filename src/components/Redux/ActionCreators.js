export const setNewProduct = productObj => {
  return { type: "CHANGE_SELECTED_PRODUCT", payload: productObj };
};

export const setNewQuestion = questionArr => {
  return { type: "CHANGE_QUESTION_SET", payload: questionArr };
};

// export const setNewAnswer = answerList => {
//   return { type: "CHANGE_ANSWER_SET", payload: answerList };
// };

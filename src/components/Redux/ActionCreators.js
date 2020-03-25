export const setNewProduct = productObj => {
  return { type: "CHANGE_SELECTED_PRODUCT", payload: productObj };
};

export const setNewQuestion = questionObj => {
  return { type: "CHANGE_QUESTION_SET", payload: questionObj };
};

export const setNewAnswer = answerList => {
  return { type: "CHANGE_ANSWER_SET", payload: answerList };
};

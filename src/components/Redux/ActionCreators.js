const CHANGE_QUESTION_SET = "CHANGE_QUESTION_SET";

export const setNewProduct = productObj => {
  return { type: "CHANGE_SELECTED_PRODUCT", payload: productObj };
};

export const setNewQuestion = questionObj => {
  return { type: CHANGE_QUESTION_SET, payload: questionObj };
};

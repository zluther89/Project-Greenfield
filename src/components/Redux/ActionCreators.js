export const setNewProduct = productObj => {
  return { type: "CHANGE_SELECTED_PRODUCT", payload: productObj };
};

export const setNewQuestion = questionArr => {
  return { type: "CHANGE_QUESTION_SET", payload: questionArr };
};

export const setNewNumOfQuestions = number => {
  return { type: "CHANGE_NUMBER_OF_QUESTIONS", payload: number };
};

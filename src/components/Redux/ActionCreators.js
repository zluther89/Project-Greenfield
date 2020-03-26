export const setNewProduct = productObj => {
  return { type: "CHANGE_SELECTED_PRODUCT", payload: productObj };
};

export const setNewQuestion = questionArr => {
  return { type: "CHANGE_QUESTION_SET", payload: questionArr };
};

export const setNewNumOfQuestions = number => {
  return { type: "CHANGE_NUMBER_OF_QUESTIONS", payload: number };
};

// export const getQuestionsThunk = id => {
//   return async dispatch => {
//     try {
//       const res = await Axios.get(
//         `http://3.134.102.30/qa/${id}?count=10000000`
//       );
//       const questions = res.data.results;
//       const action = setNewQuestion(questions);
//       dispatch(action);
//     } catch (err) {
//       console.log("error getting questions:", error);
//     }
//   };
// };
// export const setNewAnswer = answerList => {
//   return { type: "CHANGE_ANSWER_SET", payload: answerList };
// };

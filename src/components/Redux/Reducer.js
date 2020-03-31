let initialState = {
  selectedProduct: {},
  questionSet: [],
  answerSet: {},
  numOfQuestions: 2
};

const CHANGE_QUESTION_SET = "CHANGE_QUESTION_SET";
const CHANGE_SELECTED_PRODUCT = "CHANGE_SELECTED_PRODUCT";
const CHANGE_NUMBER_OF_QUESTIONS = "CHANGE_NUMBER_OF_QUESTIONS";
// const CHANGE_ANSWER_SET = "CHANGE_ANSWER_SET";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case CHANGE_QUESTION_SET:
      return { ...state, questionSet: action.payload };
    case CHANGE_NUMBER_OF_QUESTIONS:
      return { ...state, numOfQuestions: action.payload };
    // case CHANGE_ANSWER_SET:
    //   return { ...state, answerSet: action.payload };
    default:
      return state;
  }
};

let initialState = {
  selectedProduct: {},
  questionSet: {}
};

////////////////////////////////////////////////
// VALUES HERE ARE JUST PLACEHOLDERS>CHANGE //
////////////////////////////////////////////////

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    case "CHANGE_QUESTION_SET":
      return { ...state, questionSet: action.payload };
    default:
      return state;
  }
};

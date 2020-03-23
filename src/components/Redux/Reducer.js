let initialState = {
  selectedProduct: {}
};

////////////////////////////////////////////////
// VALUES HERE ARE JUST PLACEHOLDERS>CHANGE //
////////////////////////////////////////////////

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

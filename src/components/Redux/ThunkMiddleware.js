import { setNewQuestion, setNewProduct } from "./ActionCreators.js";
import Axios from "axios";

export const getQuestionsThunk = id => {
  return async dispatch => {
    try {
      const res = await Axios.get(
        `http://3.134.102.30/qa/${id}?count=10000000`
      );
      const questions = res.data.results;
      const action = setNewQuestion(questions);
      dispatch(action);
    } catch (err) {
      console.log("error getting questions:", err);
    }
  };
};

export const getNewProductThunk = id => {
  return async dispatch => {
    try {
      const res = await Axios.get(`http://3.134.102.30/products/${id}`);
      const product = res.data;
      const action = setNewProduct(product);
      dispatch(action);
    } catch (err) {
      console.log("error retrieving product", err);
    }
  };
};

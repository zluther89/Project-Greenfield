import React from "react";
import Overview from "./components/Overview";
import QuestionAnswers from "./components/QuestionAnswers";
import RatingReviews from "./components/RatingReviews";
import RelatedProducts from "./components/RelatedProducts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Overview />
      <RelatedProducts />
      <QuestionAnswers />
      <RatingReviews />
    </div>
  );
}

export default App;

import React from "react";
import Overview from "./components/Overview/Overview";
import QuestionAnswers from "./components/QuestionsAnswers/QuestionsAnswers";
import RatingReviews from "./components/RatingsReviews/RatingReviews";
import RelatedProducts from "./components/RelatedItemsCompare/RelatedItemsCompare";

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

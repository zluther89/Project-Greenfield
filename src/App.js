import React from "react";
import Overview from "./components/Overview/Overview";
import QuestionAnswers from "./components/QuestionsAnswers/QuestionsAnswers";
import RatingReviews from "./components/RatingsReviews/RatingReviews";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

import "./App.css";

function App(props) {
  const {
    match: { params }
  } = props;
  return (
    <div className="App">
      <Overview productId={params.id} />
      <RelatedProducts productId={params.id} />
      <QuestionAnswers productId={params.id} />
      <RatingReviews productId={params.id} />
    </div>
  );
}

export default App;

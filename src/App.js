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
      <Overview id={params.id} />
      <RelatedProducts id={params.id} />
      <QuestionAnswers />
      <RatingReviews />
    </div>
  );
}

export default App;

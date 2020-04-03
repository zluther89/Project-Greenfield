import React from "react";
import Overview from "./components/Overview/Overview";
import QuestionAnswers from "./components/QuestionsAnswers/Index";
import RatingReviews from "./components/RatingsReviews/RatingReviews";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import ClickTracker from "./ClickDecorator";

import "./App.css";

function App(props) {
  const {
    match: { params }
  } = props;

  const defaultId = 3;
  return (
    <div className="App">
      <ClickTracker>
        <Overview productId={params.id} defaultId={defaultId} />
        <RelatedProducts productId={params.id} defaultId={defaultId} />
        <QuestionAnswers productId={params.id} defaultId={defaultId} />
        <RatingReviews productId={params.id} defaultId={defaultId} />
      </ClickTracker>
    </div>
  );
}

// let componentArr = [
//   <Overview productId={params.id} />,
//   <RelatedProducts productId={params.id} />,
//   <QuestionAnswers productId={params.id} />,
//   <RatingReviews productId={params.id} />
// ];

export default App;

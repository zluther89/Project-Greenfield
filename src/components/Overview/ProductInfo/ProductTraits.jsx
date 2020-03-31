import React from "react";

export default function ProductTraits(props) {
  return (
    <div>
      {props.data.features &&
        props.data.features.map( (feature,i) => {
          return (
            <p key={i}>
              {feature.feature}: {feature.value}
            </p>
          );
        })}
    </div>
  );
}

import React from "react";

export default function ProductTraits(props) {
  return (
    <div>
      {props.data.features &&
        props.data.features.map(feature => {
          return (
            <p>
              {feature.feature}: {feature.value}
            </p>
          );
        })}
    </div>
  );
}

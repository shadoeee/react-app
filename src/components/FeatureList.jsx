import React from 'react';
import '/src/styles/App.css'

function FeaturesList({ feature }) {

    if (feature.important) {
        return (
            <li >✔️ {feature.content} </li>
        )
    }
  return (
    <li >❌ {feature.content} </li>
  );
}

export default FeaturesList;

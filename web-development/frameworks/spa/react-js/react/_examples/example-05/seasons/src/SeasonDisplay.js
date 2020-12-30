import React from "react";

// Import handled by `webpack`.
import './SeasonDisplay.css'

const SeasonInfo = {
    winter: {icon: "snowflake", text: "Chilly.."} ,
    summer: {icon: "sun", text: "Sweaty!"}
}

// Work out the season based on latitude and date.
function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    // JS ternary expressions.
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
    // Destructuring example...
    const { icon, text } = SeasonInfo[season];
    // Templating example && semantic-ui icon classes.
    return (
    <div className={`season-display ${season}`}>
      <i className={`top-left massive icon ${icon}`}/>
      <h1>{text}</h1>
      <i className={`bottom-right massive icon ${icon}`}/>
    </div>
  );
  // Inline example...
  // return <div>Temperature: {season === 'winter' ? 'Chilly...' : 'Sweaty!'}</div>
};

export default SeasonDisplay;

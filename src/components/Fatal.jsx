import React from "react";
import "../assets/styles/index.scss"

const Fatal = (props) => {
  return <h1 className="error center">{props.error}</h1>;
};

export default Fatal;

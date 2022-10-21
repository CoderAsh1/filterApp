import React from "react";
import "./button.css";

const Button = ({ text, id, handleClick }) => (
  <button id={id} onClick={handleClick}>
    {text}
  </button>
);

export default Button;

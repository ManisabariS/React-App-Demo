import React from "react";
import "./CardComponents.css";

const CardComponents = ({ img, name }) => {
  return (
    <div id="card-container">
      <img src={img} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default CardComponents;

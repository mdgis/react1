import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="poodle"
      src={`https://robohash.org/${props.poodle.id}?set=set3&size=180x180`}
    ></img>
    <h2>{props.poodle.name}</h2>
    <h3>{props.poodle.email}</h3>
  </div>
);

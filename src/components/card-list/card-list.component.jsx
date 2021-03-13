import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const Cardlist = (props) => (
  <div className="card-list">
    {props.poodles.map((poodle) => (
      <Card key={poodle.id} poodle={poodle} />
    ))}
  </div>
);

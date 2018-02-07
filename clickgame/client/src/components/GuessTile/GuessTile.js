import React from "react";
import "./GuessTile.css";


const GuessTile = props => (
  <div onClick={() => props.chooseTile(props)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GuessTile;

import React from "react";
import "./Title.css";

const Title = props => (
        <span className="title">
            <h1 className="gameTitle">{props.title}</h1>
            <p className="currentScore">Current Score: {props.currentScore}</p>
            <p className="topScore">Top Score: {props.topScore}</p>
        </span>

)
export default Title;

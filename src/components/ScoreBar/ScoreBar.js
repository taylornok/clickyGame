import React from "react";
import "./ScoreBar.css";

const ScoreBar = props => (
    <nav>
        <ul className="nav justify-content-end">
        <li className="nav-item">
            <h2>Total: {props.total}</h2>
        </li>
    </ul>
    </nav>
);

export default ScoreBar;
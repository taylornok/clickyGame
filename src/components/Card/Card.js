import React from "react";
import "./Card.css";
import "../../../src/CardData.json"


const Card = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
        <div className= "content">
            <p><strong>{props.name}</strong></p>
        </div>
    </div>
);

export default Card;
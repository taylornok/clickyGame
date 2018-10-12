import React from "react";
import "./Card.css";
import "../../../src/CardData.json"


// onClick = {() => props.handleClick(props.value)}
const Card = props => (
    <div onClick = {() => props.handleClick (props.id)} className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
        <div className= "content">
            <p><strong>{props.name}</strong></p>
        </div>
    </div>
);

export default Card;
import React from "react";
import Card from "./Card"

class Randomizer extends React.Component {
    state = {
        position: 1
    };

    handleClick = () => {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: this.state.random + rand })
        console.log(this.position);
    }
}

export default Randomizer;
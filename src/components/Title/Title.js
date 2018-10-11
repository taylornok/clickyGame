import React from "react";


// const Title = props => (
//     <div className="jumbotron">
//         <h1 className="display-4">Clicky Game</h1>
//         <p className="lead">Start the game by clicking on a card. Each has it's own assigned number, unbeknowst to you. Use your memory to click the appropriate cards to reach the target total. If you go over you lose. Happy playing! </p>
//         {props.children}
//     </div>

// )
const Title = props => <h1 className="title">{props.children}</h1>



export default Title;
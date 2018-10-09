import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import ScoreBar from "./components/ScoreBar";
import Title  from "./components/Title";
import CardData from "./CardData.json"

class App extends Component {

  state = {
    CardData
  }
  

  
  render() {
    return (
      <Title>Card Swap!</Title>
      {this.state.CardData.map(CardData => (
        <Card
          selectFriend = {this.selectFriend}
          id ={CardData.id}
          name ={CardData.name}
          image = {CardData.image}
          occupation  = {friend.occupation}
        />
      ))}
    );
  }
}

export default App;

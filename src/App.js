import React, { Component } from 'react';
import ReactDom from "react-dom";
import './App.css';
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import ScoreBar from "./components/ScoreBar";
import Title  from "./components/Title";
import CardData from "./CardData.json";
import Wrapper from "./components/Wrapper";


class App extends Component {
  constructor(){
    super();
    this.state = {
      total : 0,
      isClicked : false,

  
    }

    this.randomize = this.randomize.bind(this)
  }
 


/*
You could have your handleClick func back in App.js, BUT-- you could pass
it as a prop to Card.js, where internally it calls that function (which is a prop)
on it's own handleClick
*/
  randomize = id => {
    let randId = Math.floor(Math.random(id) * 12 + 1);
    this.setState({total: this.state.total + id});

    console.log(randId)
    
  };




  
  render() {
    return (
      <div>
        <div>
          <Wrapper>
              <Title>Friend Click!</Title>
            <CardContainer>
              { 
                CardData.map((item, index) => {
                  return (
                    <Card 
                      handleClick = {this.randomize}
                      id = {item.id}
                      image = {item.image}
                      name = {item.name}
                      
                    />
                  )
              })}
            </CardContainer>
          </Wrapper>
        </div>
      </div>

    )    
  }
}

export default App;

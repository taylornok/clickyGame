import React, { Component } from 'react';
// import ReactDom from "react-dom";
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
      isClicked : [],
      Cards : CardData,

    }
    // this.randomize = this.randomize.bind(this)
  }

/*
You could have your handleClick func back in App.js, BUT-- you could pass
it as a prop to Card.js, where internally it calls that function (which is a prop)
on it's own handleClick
*/
  randomize = id => {
    this.setState({Cards: this.shuffle(this.state.Cards)})
    if (this.state.isClicked.includes (id)) {
      this.setState({isClicked: []})
      this.setState({total: 0})
    } else {
      this.setState({isClicked: [...this.state.isClicked, id]})
      this.setState({total: this.state.total + id});
      // console.log(randId)
    }
    // let randId = Math.floor(Math.random(id) * 12 + 1);
  };

  shuffle = (array) => {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
  }


  shouldShowMotivation = () => {
    let motivation;
    if (this.state.total > 20){
      motivation = (<div><p>Good Job!</p></div>)
    }
    return motivation

  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <Wrapper>
              <Title>Friend Click!</Title>
              <ScoreBar
                total = {this.state.total}
              />
              {this.shouldShowMotivation()}
            <CardContainer>
              { 
                this.state.Cards.map((item, index) => {
                  return (
                    <Card 
                      handleClick = {this.randomize}
                      id = {item.id}
                      key = {item.id}
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

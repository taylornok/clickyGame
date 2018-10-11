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

  state = {
    CardData
  }

  // handleClick = event => {

  //   const min = 1;
  //   const max = 12;
  //   // const random = Math.floor(Math.random() * max + min);
  //   this.setState = ({value :this.props.random()})
  //   // console.log(this.state.value)
  //   console.log (event)

  // }

  Random = (Card) => {
    this.CardData.value = Math.floor(Math.random() * 12 +1 )
    console.log(this.Random)
    alert( `{Random}` + 'this has been clicked')
  }


  
  render() {
    return (
      <div>
        {/* <div>
          <Title>My Title</Title>
        </div> */}
        <div>
          <Wrapper>
              <Title>Friend Click!</Title>
            <CardContainer>
              { 
                CardData.map((item, index) => {
                  console.log (item.value)
                  return (
                    <Card onClick = {this.Random()}
                      image = {item.image}
                      name = {item.name}
                      value = {item.value}
                      
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

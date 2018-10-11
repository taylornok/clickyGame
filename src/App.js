import React, { Component } from 'react';
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
                  return (
                    <Card 
                      image = {item.image}
                      name = {item.name}
                    />
                  )
                  console.log (item)
              })}
            </CardContainer>
          </Wrapper>
        </div>
      </div>

    )    
  }
}

export default App;

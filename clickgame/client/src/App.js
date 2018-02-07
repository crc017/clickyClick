import React, { Component } from 'react';
import GuessTile from "./components/GuessTile";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import tiles from "./tiles.json";

import './App.css';

class App extends Component {

  state = {
    chosen: [],
    currentScore: 0,
    topScore: 0
  };
  
  chooseTile = id => {

   if(!this.state.chosen.includes(id.id)){
     this.setState(prevState => ({
      chosen: [...prevState.chosen, id.id],
      currentScore: this.state.currentScore + 1
     }))

     console.log("Scored")
    }else{ 
     console.log("Already Chosen")
      if(this.state.currentScore > this.state.topScore){
        this.setState({
          topScore: this.state.currentScore
        })
      }
      this.setState({
        chosen: [],
        currentScore: 0,
      })

    }
  };

  render() {
    return (
      <Wrapper>
        <Title
          title= "Choose Wisely"
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}/>
        { 
          tiles.sort(function(a, b){return 0.5 - Math.random()}).map(randomTile => (
            <GuessTile
              chooseTile={this.chooseTile}
              id={randomTile.id}
              key={randomTile.id}
              image={randomTile.image}

            />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;

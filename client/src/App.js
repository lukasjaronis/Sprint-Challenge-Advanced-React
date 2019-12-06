import React, { Component } from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import styled from "styled-components";

const AppStyles = styled.div`


`;

class App extends Component {
 state = {
   players: []
 }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(response => this.setState({ players: response }))
  }

  render() {
    return (
      <AppStyles>
        <div className="App">
          <h1>Women's World Cup Players</h1>
          <PlayerList players={this.state.players} />
        </div>
      </AppStyles>
    );
  }
}

export default App;

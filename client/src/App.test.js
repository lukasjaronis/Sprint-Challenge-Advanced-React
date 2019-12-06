import React, { Component } from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import PlayerCard from './components/PlayerCard';
import PlayerList from './components/PlayerList';


it('renders without crashing', () => {
  rtl.render(<App />)
});

it('does h1 exist?', () => {
 const app = rtl.render(<App />)
 app.getByText("Women's World Cup Players")
 //app.getByText("Women's Cup Players")
 rtl.cleanup()
})


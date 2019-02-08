import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './components/Travel';

const TRAVELS = [
  {
    destination: "Saint Petersburg",
    country: "Russia",
    photo: "https://i.ibb.co/1MLCN2t/russia.jpg",
    distance: "6217km",
    photoCredit: "Pixabay | jackmac34"
  },
  {
    destination: "Inverness",
    country: "Scotland",
    photo: "https://i.ibb.co/HKhY0LH/scotland.jpg",
    distance: "1560km",
    photoCredit: "Pixabay | 12019"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Travels</h1>
        </header>
        <Travel travels={TRAVELS} />
      </div>
    );
  }
}

export default App;

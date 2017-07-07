import React, { Component } from 'react';
import logo from './HarryQRCode.jpg';
import './ReactLogo.css';

class ReactLogo extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tic-Tac-Toe board game with React</h2>
      </div>
    );
  }
}

export default ReactLogo;

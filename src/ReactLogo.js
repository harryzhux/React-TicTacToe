import React, { Component } from 'react';
import logo from './logo.svg';
import qrimg from './HarryQRCode.jpg';
import './ReactLogo.css';

class ReactLogo extends Component {
  render() {
    return (
      <div className="App-header">
	<h2>
          <img src={logo} className="App-logo" alt="logo" />
          Tic-Tac-Toe board game with React
          <img src={qrimg} className="App-QR" alt="QR" />
	</h2>
      </div>
    );
  }
}

export default ReactLogo;

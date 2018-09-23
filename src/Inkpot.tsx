import * as React from 'react';
import './Inkpot.css';
import Pot from './Pot'

import logo from './logo.svg';

class Inkpot extends React.Component {
  public render() {
    return (
      <div className="inkpot">
        <header className="inkpot-header">
          <img src={logo} className="inkpot-logo" alt="logo" />
          <h1 className="inkpot-title">I'm going to be Inkpot</h1>
        </header>
        <Pot />
        <footer className="inkpot-footer">
          <div className="inkpot-info">
            <p>Una pioggia di parole</p>
            <p>info@inkpot.it</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Inkpot;

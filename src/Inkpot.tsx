import * as React from 'react';
import './Inkpot.css';
import Pot from './Pot'

import logo from './inkpot_logo.png';

class Inkpot extends React.Component {
  public render() {
    return (
      <div className="inkpot">
        <header className="inkpot-header">
          <div>
            <img src={logo} className="inkpot-logo" alt="logo" />
          </div>
        </header>
        <div className="inkpot-content">
          <Pot />
        </div>
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

import React, { Component } from 'react';

import Pot from './Pot'

class Inkpot extends Component {
  public render() {
    return (
      <div className='container'>
        <div>
          :)
          </div>
        <Pot />
        <div>
          <address>
            <p>Una pioggia di parole</p>
            <p>info@inkpot.it</p>
          </address>
        </div>
      </div>
    );
  }
}

export default Inkpot;

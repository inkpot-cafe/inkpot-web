import * as React from 'react';
import './Pot.css';

import Ink from './Ink'

class Pot extends React.Component {
  public render() {
    return (
      <div className="pot">
        <Ink />
        <Ink />
      </div>
    );
  }
}

export default Pot;
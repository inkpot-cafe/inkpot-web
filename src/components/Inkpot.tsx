import * as React from 'react';

import Pot from './Pot'
import Header from './Header';

class Inkpot extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Pot />
          <div>
            <address>
              <p>Una pioggia di parole</p>
              <p>info@inkpot.it</p>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default Inkpot;

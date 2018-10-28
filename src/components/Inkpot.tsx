import * as React from 'react';

import Pot from './Pot'
import Header from './Header';
import Footer from './Footer';

class Inkpot extends React.Component {
  public render() {
    return (
      <div id="inkpot">
        <Header />
        <Pot />
        <Footer />
      </div>
    );
  }
}

export default Inkpot;

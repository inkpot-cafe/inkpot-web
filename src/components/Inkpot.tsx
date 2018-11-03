import * as React from 'react';

import Pot from './Pot'
import Header from './Header';
import Footer from './Footer';

class Inkpot extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <Pot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Inkpot;

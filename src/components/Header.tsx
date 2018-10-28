import * as React from 'react';
import * as logo from '../resources/inkpot_logo.png'

class Header extends React.Component {
  public render() {
    return (
      <header>
        <div className="container">
          <img src={logo} className="img-fluid" />
        </div>
        
      </header>
    );
  }
}

export default Header;
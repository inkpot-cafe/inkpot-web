import * as React from 'react';
import * as logo from '../assets/images/inkpot_logo.png'

class Header extends React.Component {
  public render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} className="img-fluid" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
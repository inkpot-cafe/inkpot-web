import * as React from 'react';

import Ink from './Ink'

class Pot extends React.Component {
  public render() {
    return (
      <div className="pot container-fluid pt-4 pb-4">
        <Ink />
      </div>
    );
  }
}

export default Pot;
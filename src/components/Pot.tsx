import * as React from 'react';

import Ink from './Ink'

import * as contents from '../assets/resources/stories.json'

class Pot extends React.Component {
  public render() {

    const inks = contents.map(
      (content: string, index) => <Ink key={index} content={content} />
    )

    return (
      <div className="pot container-fluid pt-4 pb-4">
        {inks}
      </div>
    );
  }
}

export default Pot;
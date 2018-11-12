import * as React from 'react';

import Ink from './Ink'

import * as contents from '../assets/resources/stories.json'

class Pot extends React.Component {
  public render() {

    const inks = contents.map(
      // TODO: change index with the story id
      (content: string, index) => <Ink key={index} content={content} />
    )

    return (
      <div className="pot">
        {inks}
      </div>
    );
  }
}

export default Pot;
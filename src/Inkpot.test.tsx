import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Inkpot from './Inkpot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Inkpot />, div);
  ReactDOM.unmountComponentAtNode(div);
});

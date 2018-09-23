import * as React from 'react';
import  { render } from  'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Inkpot from './Inkpot';

import reducers from './reducers';

import './index.css';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers)
render(
  <Provider store={store}>
    <Inkpot />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

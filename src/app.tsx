import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {lazy, Suspense} from 'react';

import * as ReactDom from 'react-dom';
import './style/app.scss'

const Inkpot = lazy(() => import('./components/Inkpot'));
const Upload = lazy(() => import('./components/Upload'));

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Inkpot}/>
                <Route path="/upload" component={Upload}/>
            </Switch>
        </Suspense>
    </Router>
);

ReactDom.render(
    <App />,
  document.getElementById("inkpot")
);

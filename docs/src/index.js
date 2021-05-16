import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import HorizontalBar from './charts/HorizontalBar';

const App = () => (
  <Router>
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/horizontal-bar' component={HorizontalBar} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

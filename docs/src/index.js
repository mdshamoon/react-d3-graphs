import './reset.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import VerticalBar from './charts/VerticalBar'
import HorizontalBar from './charts/HorizontalBar'
import StackedBar from './charts/StackedBar'
import GroupedBar from './charts/GroupedBar'
import Line from './charts/Line'
import MultiAxisLine from './charts/MultiAxisLine'
import Scatter from './charts/Scatter'
import Doughnut from './charts/Doughnut'
import Pie from './charts/Pie'
import Polar from './charts/Polar'
import Radar from './charts/Radar'
import Dynamic from './charts/Dynamic'
import MultiType from './charts/MultiType'
import Crazy from './charts/Crazy'
import ClickEvents from './charts/ClickEvents'

const App = () => (
  <Router>
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

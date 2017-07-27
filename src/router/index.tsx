import * as React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'

class Router extends React.Component {
  render () {
    return (
      <HashRouter>
        <div className="period-site">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </HashRouter>
    )
  }
}

export default Router

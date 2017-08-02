import * as React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from './Home'
import Asaki from './Asaki'
import Profile from './Profile'
import Portfolio from './Portfolio'
import Links from './Links'

class Router extends React.Component<undefined, undefined> {
  render () {
    return (
      <HashRouter>
        <div className="period-site">
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/asaki" component={Asaki}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/links" component={Links}/>
        </div>
      </HashRouter>
    )
  }
}

export default Router

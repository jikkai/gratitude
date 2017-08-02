import * as React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Navigation from '../components/Navigation'

import Home from './Home'
import Profile from './Profile'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'

class Router extends React.Component<undefined, undefined> {
  render () {
    return (
      <HashRouter>
        <div className="period-site">
          <Navigation />

          <div className="period-main">
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            {/* <Loading /> */}
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Router

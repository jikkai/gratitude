import * as React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
  render () {
    return <h1>Hello, <Link to="/">About</Link></h1>
  }
}

export default About

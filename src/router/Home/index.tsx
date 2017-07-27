import * as React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return <h1>Hello, <Link to="/about">Home</Link></h1>
  }
}

export default Home

import * as React from 'react'
import './style'

class Loading extends React.Component<undefined, undefined> {
  componentDidMount () {
    console.log(this.refs.loading)
  }

  render () {
    return (
      <div className='period-loading' ref="loading">
        <div className='period-loading__loader'></div>
        <h1 className="period-loading__title">Period</h1>
      </div>
    )
  }
}

export default Loading

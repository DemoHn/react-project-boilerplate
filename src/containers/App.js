import React, { Component } from 'react'
import { connect } from 'dva'
import TODO from './TODO'
class App extends Component {
  render() {
    const { count, dispatch } = this.props
    return (
      <div>
        <span>TODO</span>
        <div>count: {count}</div>
        <button onClick={() => dispatch({ type: 'counter/add' })}>+</button>
        <button onClick={() => dispatch({ type: 'counter/reduce' })}>-</button>
        <TODO />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.counter
}

export default connect(mapStateToProps)(App)
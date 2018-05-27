import React, { Component } from 'react'
import { connect } from 'dva'
import TODOItem from '../components/TODO'

class TODO extends Component {
  constructor() {
    super()
    this.state = {
      pendingItem: ''
    }

    this.updateInputValue = this.updateInputValue.bind(this)
  }

  updateInputValue(e) {
    this.setState({
      ...this.state,
      pendingItem: e.target.value,
    })
  }

  render() {
    const { items, dispatch } = this.props
    const { pendingItem } = this.state
    return (
      <div>
        <div><h3>TODO App</h3></div>
        <hr />
        {items.map((item, index) => (<TODOItem item={item} key={index} />))}
        <hr />
        <input onChange={this.updateInputValue} />
        <button onClick={() => dispatch({ type: 'todo/addItem', item: pendingItem })}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.todo
}

export default connect(mapStateToProps)(TODO)


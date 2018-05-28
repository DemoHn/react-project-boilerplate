import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Input } from 'antd'
import shortid from 'shortid'
import TodoItem from '../components/TodoItem'
import TodoContainer from '../components/TodoContainer'


class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      inputVal: '',
    }

    this.updateInputVal = this.updateInputVal.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  updateInputVal(e) {
    this.setState({
      ...this.state,
      inputVal: e.target.value,
    })
  }
  handleClick() {
    const { inputVal } = this.state
    const { addItem } = this.props
    addItem(inputVal)

    // clear input value
    this.setState({
      ...this.state,
      inputVal: '',
    })
  }
  render() {
    const { items } = this.props
    const { inputVal } = this.state
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <h1>TODO App</h1>
        </div>
        <TodoContainer ordered={false}>
          {items.map(item => (<TodoItem item={item} key={shortid.generate()} />))}
        </TodoContainer>

        <div>
          <Input
            style={{ width: '40%', marginRight: 20 }}
            value={inputVal}
            onChange={this.updateInputVal}
            onPressEnter={this.handleClick}
            placeholder="TODO Item"
          />
          <Button onClick={this.handleClick}>Add</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.todo

const mapDispatchToProps = dispatch => ({
  addItem(pendingItem) {
    dispatch({ type: 'todo/addItem', item: pendingItem })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


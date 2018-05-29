import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Input, Switch, Divider } from 'antd'
import shortid from 'shortid'
import TodoItem from '../components/TodoItem'
import TodoContainer from '../components/TodoContainer'


class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
    }

    this.updateInputValue = this.updateInputValue.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  updateInputValue(e) {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    })
  }
  handleClick() {
    const { inputValue } = this.state
    const { addItem } = this.props
    addItem(inputValue)

    // clear input value
    this.setState({
      ...this.state,
      inputValue: '',
    })
  }
  render() {
    const { items, ordered, toggleOrder } = this.props
    const { inputValue } = this.state
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <h1>TODO App</h1>
        </div>
        <TodoContainer ordered={ordered}>
          {Object.keys(items).map(key => (<TodoItem item={items[key]} key={key} />))}
        </TodoContainer>

        <div>
          <Input
            style={{ width: '40%', marginRight: 20 }}
            value={inputValue}
            onChange={this.updateInputValue}
            onPressEnter={this.handleClick}
            placeholder="TODO Item"
          />
          <Button onClick={this.handleClick}>Add</Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <span>Ordered List: </span>
          <Switch defaultChecked={ordered} onChange={() => toggleOrder()} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.todo

const mapDispatchToProps = dispatch => ({
  addItem(pendingItem) {
    const item = {
      key: shortid.generate(),
      value: pendingItem,
    }
    dispatch({ type: 'todo/addItem', item })
  },
  toggleOrder() {
    dispatch({ type: 'todo/toggleOrder' })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


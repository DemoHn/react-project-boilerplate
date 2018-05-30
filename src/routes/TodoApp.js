// react/forbid-prop-types: 0
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Input, Switch } from 'antd'
import shortid from 'shortid'
import TodoItem from '../components/TodoItem'
import TodoContainer from '../components/TodoContainer'
import BlockNote from '../components/BlockNote'

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
        <div style={{ marginTop: 20, width: 600 }}>
          <BlockNote header="Demo" markdownMode={false}>
            <div>
              <TodoContainer ordered={ordered}>
                {Object.keys(items).map(key => (<TodoItem item={items[key]} key={key} />))}
              </TodoContainer>
              <Input
                style={{ width: '50%', marginRight: 20 }}
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
          </BlockNote>
          <div style={{ marginTop: 20 }} />

          <BlockNote header="Explanation" defaultOpened={false}>
            {
              `__TODO App__ is the most fundanmental example in the React world. 
Nevertheless, it demostrates most of React features, including custom component, 
event handler, state management, etc.  

In this example, the model is defined as \`todo\` in \`src/models/todo.js\`, where the structure 
is concluded as follows:

\`\`\`
const todo = {
  namespace: 'todo',
  // define all states
  state: { <states> },
  // define all reducers
  reducers: {
    <action1>: function(state, payload) {
      return <newState>
    },
    ...
  }
}
\`\`\`

_For more details, check [dva.model](https://github.com/dvajs/dva/blob/master/docs/API.md#model)_
`
            }
          </BlockNote>
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

TodoApp.propTypes = {
  items: PropTypes.object.isRequired,
  ordered: PropTypes.bool.isRequired,
  toggleOrder: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


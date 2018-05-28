import React from 'react'
import PropTypes from 'prop-types'

const itemStyle = {
  fontSize: 16,
  lineHeight: 1.8,
}
const TodoItem = props => (
  <li style={itemStyle}>{props.item}</li>
)

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
}

export default TodoItem

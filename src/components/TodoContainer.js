import React from 'react'
import PropTypes from 'prop-types'

const TodoContainer = (props) => {
  const { children, ordered } = props
  if (ordered) {
    return (
      <ol>{children}</ol>
    )
  }
  // default
  return (
    <ul>{children}</ul>
  )
}

TodoContainer.propTypes = {
  children: PropTypes.node,
  ordered: PropTypes.bool.isRequired,
}

TodoContainer.defaultProps = {
  children: null,
}

export default TodoContainer

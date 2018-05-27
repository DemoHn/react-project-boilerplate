import React from 'react'
import PropTypes from 'prop-types'

const TODOItem = (props) => {
  return (
    <div>
      <b>{props.item}</b>
    </div>
  )
}

TODOItem.propTypes = {
  item: PropTypes.string.isRequired
}

export default TODOItem
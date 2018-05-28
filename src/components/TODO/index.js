import React from 'react'
import PropTypes from 'prop-types'

const TODOItem = props => (
  <div style={{ fontSize: 18, lineHeight: 2 }}>{`- ${props.item}`}</div>
)

TODOItem.propTypes = {
  item: PropTypes.string.isRequired,
}

export default TODOItem

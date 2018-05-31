import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

const TagItem = (props) => {
  const {
    children, onClick, isSelected,
  } = props
  let tagStyle = {}

  if (isSelected) {
    tagStyle = {
      ...tagStyle,
      backgroundColor: '#1890ff',
      borderColor: 'transparent',
      color: 'white',
    }
  }

  return (
    <Tag
      onClick={onClick}
      style={tagStyle}
    >{children}
    </Tag>
  )
}

const GTag = (props) => {
  const { tags, current, onChange } = props
  return (
    <div>
      {tags.map(tag => (
        <TagItem
          isSelected={tag === current}
          key={tag}
          onClick={() => onChange(tag)}
        >{tag}
        </TagItem>
      ))}
    </div>
  )
}

GTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TagItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default GTag

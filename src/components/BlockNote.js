import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import { Collapse } from 'antd'

const { Panel } = Collapse

const BlockNote = (props) => {
  const {
    children, header, defaultOpened, markdownMode,
  } = props

  const defaultKey = defaultOpened ? ['1'] : []
  return (
    <Collapse defaultActiveKey={defaultKey}>
      <Panel header={header} key="1">
        {markdownMode ? <ReactMarkdown source={children} /> : children}
      </Panel>
    </Collapse>
  )
}

BlockNote.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  defaultOpened: PropTypes.bool,
  markdownMode: PropTypes.bool,
}

BlockNote.defaultProps = {
  defaultOpened: true,
  markdownMode: true,
}

export default BlockNote

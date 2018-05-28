import React, { Component } from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import 'antd/dist/antd.css'

/**
 * @name - DefaultLayout
 * @description - nothing contains, only load antd CSS
 *
 */
class DefaultLayout extends Component {
  constructor(props) {
    super(props)

    this.styles = {
      main: {
        backgroundColor: 'transparent',
      },
    }
  }

  render() {
    const mergedStyles = {
      ...this.styles.main,
      ...this.props.style,
    }
    return (
      <div>
        <Layout style={mergedStyles}>
          {this.props.children}
        </Layout>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  style: stylePropType,
  children: PropTypes.node.isRequired,
}

DefaultLayout.defaultProps = {
  style: {},
}

export default DefaultLayout

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StickyBox from 'react-sticky-box'
import DefaultLayout from './DefaultLayout'

/**
 * @name - Guide
 * @description - A simple layout for designing presentational pages
 * with steps. The most obvious usage is 'user guide', where the
 * layout name is called.
 *
 * @layout
 *               (narrow width: 1024px)
 * +----------------------------------------------+
 * |                                              |
 * |                   <Title>                    |
 * |                                              |
 * +----------------------------------------------+
 * |                                              |
 * |         Menu 1  |         <Content>          |
 * |         Menu 2  |                            |
 * |          ...    |                            |
 * |         Menu N  |                            |
 * +----------------------------------------------+
 */
class GuideLayout extends Component {
  constructor(props) {
    super(props)
    // Since there're only few stylesheet rules, we just
    // define it in constructor for simplicity.
    this.styles = {
      main: {
        minHeight: '100vh',
        maxWidth: '1024px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      container: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      sticky: {
        flexGrow: 0,
        flexShrink: 0,
      },
      content: {
        flex: 1,
      },
    }
  }

  render() {
    const { header, sider, children } = this.props

    const stickyBoxStyle = {
      ...this.styles.sticky,
      flexBasis: this.props.siderWidth,
    }
    return (
      <DefaultLayout style={this.styles.main}>
        <div>{header()}</div>
        <div className="container" style={this.styles.container}>
          <StickyBox style={stickyBoxStyle}>{sider()}</StickyBox>
          <div className="content" style={this.styles.content}>{children}</div>
        </div>
      </DefaultLayout >
    )
  }
}

GuideLayout.propTypes = {
  header: PropTypes.func,
  sider: PropTypes.func,
  siderWidth: PropTypes.number,
  children: PropTypes.node,

}

GuideLayout.defaultProps = {
  header: null,
  sider: null,
  siderWidth: 200,
  children: null,
}
export default GuideLayout

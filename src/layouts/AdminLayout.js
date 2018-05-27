import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import style from './style_admin.css'

const { Header, Content, Sider } = Layout

class AdminPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <Layout style={style.main}>
        <Header style={style.header}>
          <Menu
            theme="dark"
            mode="horizontal"
          />
        </Header>
        <Layout>
          <Sider style={style.sider} />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            />
          </Layout>
        </Layout>
      </Layout >
    )
  }
}

export default AdminPanel


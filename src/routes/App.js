import React from 'react'
import { Route, Link, Switch } from 'dva/router'
import { Menu } from 'antd'
import GuideLayout from '../layouts/GuideLayout'
import logo from '../assets/naive.png'
// components
import Introduction from './Introduction'
import TODO from './TODO'

const Title = (margin) => {
  const titleStyle = {
    marginTop: margin,
    marginBottom: margin,
  }
  return (
    <div style={titleStyle}>
      <img src={logo} alt="logo" width={240} />
    </div>
  )
}

const Sider = () => (
  <Menu mode="inline" defaultSelectedKeys={['index']}>
    <Menu.Item key="index">
      <Link to="/" href="/">Index</Link>
    </Menu.Item>
    <Menu.Item key="todo">
      <Link to="/todo" href="/todo">TODO App</Link>
    </Menu.Item>
  </Menu>
)

const App = () => (
  <GuideLayout header={Title(45)} sider={Sider()} siderWidth={256}>
    <div
      className="contentFrame"
      style={{
        padding: '10px 20px',
      }}
    >
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/todo" component={TODO} />
      </Switch>
    </div>
  </GuideLayout>
)

export default App

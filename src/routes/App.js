import React from 'react'
import { Route, Link, Switch } from 'dva/router'
import { Menu } from 'antd'
import GuideLayout from '../layouts/GuideLayout'
import logo from '../assets/naive.png'
// components
import Introduction from './Introduction'
import TodoApp from './TodoApp'
import GitHubAPI from './GitHubAPI'

const Title = () => {
  const titleStyle = {
    marginTop: 20,
    marginBottom: 20,
  }
  return (
    <div style={titleStyle}>
      <img src={logo} alt="logo" width={200} />
    </div>
  )
}

const Sider = ({ pathname }) => (
  <Menu mode="inline" defaultSelectedKeys={['/']} selectedKeys={[pathname]}>
    <Menu.Item key="/">
      <Link to="/" href="/">Index</Link>
    </Menu.Item>
    <Menu.Item key="/todo">
      <Link to="/todo" href="/todo">TODO App</Link>
    </Menu.Item>
    <Menu.Item key="/github">
      <Link to="/github" href="/github">GitHub API</Link>
    </Menu.Item>
  </Menu>
)

const App = ({ location }) => (
  <GuideLayout header={Title} sider={() => Sider(location)} siderWidth={256} >
    <div
      className="contentFrame"
      style={{
        padding: '10px 20px',
      }}
    >
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/github" component={GitHubAPI} />
      </Switch>
    </div>
  </GuideLayout >
)

export default App

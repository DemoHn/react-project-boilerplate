import dva from 'dva'
import React from 'react'
import { Router, Route } from 'dva/router'
import createBrowserHistory from 'history/createBrowserHistory';
import CounterModel from './models/counter'
import TODOModel from './models/todo'
import App from './containers/App'
// ref: https://github.com/sorrycc/github-stars/blob/master/src/index.js
// 1. create new dva app
const app = dva({
  // TODO: use react-router's browserHistory?  
  history: createBrowserHistory(),
})

// 2. load models
app.model(CounterModel)
app.model(TODOModel)

// 3. load routers
app.router(({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}></Route>
    </Router>
  )
})
// 4. start rendering!
app.start('#root')
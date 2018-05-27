import dva from 'dva'
import createBrowserHistory from 'history/createBrowserHistory'
import CounterModel from './models/counter'
import TODOModel from './models/todo'
import AppRouter from './router'

// ref: https://github.com/sorrycc/github-stars/blob/master/src/index.js
// 1. create new dva app
const app = dva({
  // TODO: use react-router's browserHistory?
  history: createBrowserHistory(),
})

// 2. load models
app.model(CounterModel)
app.model(TODOModel)

// 3. load router
app.router(AppRouter)

// 4. start rendering!
app.start('#root')

import React from 'react'
import { Router, Route } from 'dva/router'
import PropTypes from 'prop-types'
import { history as historyPropTypes } from 'history-prop-types'
import App from './routes/App'

const AppRoutes = props => (
  <Router history={props.history}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
)

AppRoutes.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
}

export default AppRoutes


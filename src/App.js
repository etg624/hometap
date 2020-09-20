import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserFormContainer from './containers/UserFormContainer'
import UserOrderContainer from './containers/UserOrderContainer'
import './App.css'
const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={UserFormContainer} />
          <Route exact path="/user" component={UserOrderContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

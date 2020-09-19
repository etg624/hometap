import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserFormContainer from './containers/UserFormContainer'
import UserProfileContainer from './containers/UserProfileContainer'
import './App.css'
const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={UserFormContainer} />
          <Route exact path="/user" component={UserProfileContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

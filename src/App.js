import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserFormContainer from './containers/UserFormContainer'
import UserOrderContainer from './containers/UserOrderContainer'
import Header from './components/Header'
import './App.css'
const App = () => {
  return (
    <Router>
      <Header />
      <main className="app">
        <Switch>
          <Route exact path="/" component={UserFormContainer} />
          <Route exact path="/user" component={UserOrderContainer} />
        </Switch>
      </main>
    </Router>
  )
}

export default App

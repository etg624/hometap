import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserFormContainer from './containers/UserFormContainer'
import UserOrderContainer from './containers/UserOrderContainer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="app">
        <Switch>
          <Route exact path="/" component={UserFormContainer} />
          <Route exact path="/user" component={UserOrderContainer} />
          <NotFound />
        </Switch>
      </main>
    </Router>
  )
}

export default App

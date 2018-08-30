import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SiteNav from './SiteNav'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <SiteNav />
          <Switch>
            <Route exact path="/" component={ManagePage} />
            <Route path="/preview" component={PreviewPage} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App

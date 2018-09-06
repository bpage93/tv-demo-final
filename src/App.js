import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SiteNav from './SiteNav'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage';
import './App.css'

class App extends Component {
  state = {
    show: {
      name: '',
      rating: '',
      imageUrl: ''
    }
  }

  showDeleted = () => {
    this.setState({
      show: {
        name: '',
        rating: '',
        imageUrl: ''
      }
    })
  }

  saveShow = (showToSave) => {
    this.setState({
      show: {
        name: showToSave.name,
        rating: showToSave.rating,
        imageUrl: showToSave.imageUrl
      }
    })
  }

  renderManagePage = () => {
    return (<ManagePage show={this.state.show} showDeleted={this.showDeleted} saveShow={this.saveShow} />)
  }

  renderPreviewPage = () => {
    return (<PreviewPage show={this.state.show} />)
  }

  render() {
    return (
      <Router>
        <Fragment>
          <SiteNav />
          <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/preview" component={this.renderPreviewPage} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App

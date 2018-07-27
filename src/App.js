import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import UserList from './UserList'
import UserDetails from './UserDetails'

class App extends Component {
  render() {
    return (
      <Router>
				<div>
      		<Switch>
	      		<Route exact path="/" component={UserList} />
	      		<Route path="/user/:id" component={UserDetails} />
      		</Switch>
				</div>
      </Router>
    )
  }
}

export default App

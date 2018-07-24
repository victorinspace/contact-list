import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import List from './List'
import Detail from './Detail'

class App extends Component {
  render() {
    return (
      <Router>
				<div>
      		<Switch>
	      		<Route exact path="/" component={List} />
	      		<Route path="/detail" component={Detail} />
      		</Switch>
				</div>
      </Router>
    )
  }
}

export default App

import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import List from './List'
import DetailContainer from './DetailContainer'

class App extends Component {
  render() {
    return (
      <Router>
				<div>
      		<Switch>
	      		<Route exact path="/" component={List} />
	      		<Route path="/detail/:id" component={DetailContainer} />
      		</Switch>
				</div>
      </Router>
    )
  }
}

export default App

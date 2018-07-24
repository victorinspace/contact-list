import React, { Component } from 'react'
import './App.css'

import contacts from './contacts.json'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is The Top Header</h1>
        <ul>
        	<li>This is a test {contacts}</li>
        	<li>This is also a test</li>
        	<li>Hey, look at that. Another test</li>
        </ul>
      </div>
    )
  }
}

export default App

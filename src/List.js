import React, { Component } from 'react'
import Contacts from './contacts.json'

class List extends Component {

	render() {
		return (
			<ul>
				{Contacts.map(person => (
					<li key={person.id}><img src={person.picture.thumbnail} /> {person.name.first} {person.name.last}</li>
				))}
			</ul>
		)
	}
}

export default List
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Contacts from './actions/contacts.json'

class List extends Component {

	render() {
		return (
			<div>
				<h1>My Peeps</h1>
				<div className="peeps">
					<ul>
						{Contacts.map(person => (
							<Link to={`/details/${person.id}`}><li key={person.id}><img src={person.picture.thumbnail} alt="" /> {person.name.first} {person.name.last}</li></Link>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default List
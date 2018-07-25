import React, { Component } from 'react'
// import Detail from './Detail'
import Contacts from './actions/contacts.json'
// import { getName } from './actions/GetName.js'

class DetailContainer extends Component {
	state = {
		photo: '',
		name: '',
		email: '',
		phone: '',
		location: ''
	}

	componentDidMount() {
		let contact = Contacts.find(person => person.id === this.props.match.params.id)

		this.setState({
			photo: contact.picture.medium,
			name: `${contact.name.first} ${contact.name.last}`,
			email: contact.email,
			phone: contact.phone,
			loaction: `${contact.location.city}, ${contact.location.state}`
		})
	}

	componentDidUpdate(newProps) {
		if (newProps.match.params.id !== this.props.params.id) {
			let contact = Contacts.find(person => person.id === this.props.match.params.id)

			this.setState({
				photo: contact.picture.medium,
				name: `${contact.name.first} ${contact.name.last}`,
				email: contact.email,
				phone: contact.phone,
				loaction: `${contact.location.city}, ${contact.location.state}`
			})
		}
	}

	render() {
		return (
			<div>
				<div className="detailImg">
					<img src={this.state.photo} alt="" />
				</div>
				<ul>
					<li>{this.state.name}</li>
					<li>{this.state.email}</li>
					<li>{this.state.phone}</li>
					<li>{this.state.location}</li>
				</ul>
			</div>
		)
	}
}

export default DetailContainer
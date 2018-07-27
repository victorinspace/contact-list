import React, { Component } from 'react'
import { getUser } from './userFunctions'

const UserDetails = (props) => (
	<div>
		<img src={props.img} alt=""/>
		<ul>
			<li>{props.name}</li>
			<li>{props.email}</li>
			<li>{props.phone}</li>
			<li>{props.location}</li>
		</ul>
	</div>
)

class Detail extends Component { 
	state = {
		img: '',
		name: '',
		email: '',
		phone: '',
		location: ''
	}

	componentDidUpdate() {
		const user = getUser(this.props.match.params.id)

		this.setState({
			img: user.picture.large,
			name: `${user.name.first} ${user.name.last}`,
			email: user.email,
			phone: user.phone,
			location: `${user.location.city}, ${user.location.state}`
		})
	}

	render() {
		return (
			<UserDetails {...this.state} />
		)
	}
}

export default UserDetailsContainer
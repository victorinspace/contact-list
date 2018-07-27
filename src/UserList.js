import React, { Component } from 'react'
import { getAllUsers } from './userFunctions'
import { Link } from 'react-router-dom'

const UserList = (props) => (
	<div>
		<h2>MyPeeps</h2>
		<ul>
			{props.users.map(user => (
				<li>
					<Link to={`/user/${user.id}`}>
						<img src={user.picture.thumbnail} alt=""/>
						{user.name.first} {user.name.last}
					</Link>
				</li>
			))}
		</ul>
	</div>
)

class UserListContainer extends Component {
	state = {
		users: []
	}

	componentDidMount() {
		this.setState({
			users: getAllUsers()
		})
	}

	render() {
		return (
			<UserList users={this.state.users} />
		)
	}
}

export default UserListContainer
import Contacts from './contacts.json'

export function getPerson(id) {
	return Contacts.find(person => person.id === this.props.match.id)
}
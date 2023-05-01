import { deletePerson } from '../../services/persons'

export default function Persons({ persons, filter, handleDelete }) {
  return persons
    .filter((person) => person.name.toLowerCase().includes(filter))
    .map((person) => (
      <p key={person.name}>
        {person.name} {person.number}{' '}
        <button onClick={() => handleDelete(person)}>delete</button>
      </p>
    ))
}

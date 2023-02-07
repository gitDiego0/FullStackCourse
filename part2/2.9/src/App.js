import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleName = (evt) => {
    setNewName(evt.target.value)
  }
  const handleNumber = (evt) => {
    setNewNumber(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (persons.filter(person => person.name === newName).length <= 0) {

      const addNewName = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(addNewName))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleFilter = (evt) => {
    setFilter(evt.target.value)
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Phonebook</h2>
      <span>filter shown with </span><input onChange={handleFilter} value={filter} />
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} value={newName} /><br />
          number: <input onChange={handleNumber} value={newNumber} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().includes(filter)).map((person) => (<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default App
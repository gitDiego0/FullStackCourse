import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default App
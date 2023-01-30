import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (evt) => {
    setNewName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (persons.filter(person => person.name === newName).length <= 0) {

      const addNewName = {
        name: newName
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
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (<p key={person.name}>{person.name}</p>))}
    </div>
  )
}

export default App
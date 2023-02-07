import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import Persons from './Components/Persons/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        const { data } = response
        setPersons(data)
      })
  }, [])

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
      <Filter value={filter} setFilter={handleFilter} />
      <h3>add a new</h3>
      <Form submit={handleSubmit} handleNumber={handleNumber} handleName={handleName} name={newName} number={newNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
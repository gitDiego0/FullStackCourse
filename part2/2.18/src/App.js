import React, { useState, useEffect } from 'react'

import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import Persons from './Components/Persons/Persons'
import { addPerson, deletePerson, getPersons, updatePerson } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {

    getPersons().then(response => {
      setPersons(response)
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
    const personsFilter = persons.filter(person => person.name === newName).length <= 0
    if (personsFilter) {

      const addNewName = {
        name: newName,
        number: newNumber
      }

      addPerson(addNewName)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })


    }
    else {
      const person = persons.find(x => (x.name === newName))
      console.log(person)
      if (window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?`)) {
        const updateNumber = {
          name: newName,
          number: newNumber
        }
        updatePerson(person.id, updateNumber)
        window.location.reload()
      }
    }
  }
  const handleFilter = (evt) => {
    setFilter(evt.target.value)
  }

  const handleDelete = ({ id, name }) => {
    if (window.confirm(`Delete ${name}?`)) {

      deletePerson(id)
        .then(setPersons(persons.filter(n => n.id !== id)))
    }
  }



  return (
    <div style={{ padding: '1rem' }}>
      <h2>Phonebook</h2>
      <Filter value={filter} setFilter={handleFilter} />
      <h3>add a new</h3>
      <Form submit={handleSubmit} handleNumber={handleNumber} handleName={handleName} name={newName} number={newNumber} />
      <h3>Numbers</h3>
      <Persons handleDelete={handleDelete} persons={persons} filter={filter} />
    </div>
  )
}

export default App
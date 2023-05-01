import axios from 'axios'

export const getPersons = () => {
  return axios.get('http://localhost:3001/persons')
    .then(response => {
      const { data } = response
      return data
    })
}



export const addPerson = ({ name, number }) => {
  return axios.post('http://localhost:3001/persons', { name, number })
    .then(response => {

      return response.data
    })
}

export const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`)
    .then(response => response.data)
}

export const updatePerson = (id, newNumber) => {
  return axios.put(`http://localhost:3001/persons/${id}`, newNumber)
    .then(response => response.data)
}
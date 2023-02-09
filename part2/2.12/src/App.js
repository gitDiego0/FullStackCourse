
import { useState, useEffect } from 'react'
import Country from './Components/Country/Country'

function App() {

  const [countries, setCountries] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => setCountries(json))
  }, [])

  const handleChange = (evt) => {
    setText(evt.target.value)
  }

  const arrayLenght = countries.filter(country => country.name.common.toLowerCase().includes(text)).map(country => <p key={country.name.common}>{country.name.common}</p>).length


  return (
    <div style={{ padding: '1rem' }}>
      <span>find countries </span>
      <input onChange={handleChange} value={text} />
      <>
        {arrayLenght <= 10 ? countries.filter(country => country.name.common.toLowerCase().includes(text)).map(country => arrayLenght === 1 ? <Country {...country} /> : <p key={country.name.common}>{country.name.common}</p>) : <p>Too many matches, specify another filter</p>}
      </>
    </div>
  );
}

export default App;

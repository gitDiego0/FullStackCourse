import { useState, useEffect } from 'react'
export default function Country({
  name,
  flags,
  capital,
  population,
  languages,
}) {
  const values = Object.values(languages)

  const [show, setShow] = useState(false)
  const [weather, setWeather] = useState([])
  const weatherKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${capital}`
    )
      .then((response) => response.json())
      .then((json) => {
        const { current } = json
        setWeather(current)
      })
  }, [])

  return (
    <div>
      <div>
        <span style={{ marginRight: '0.5rem' }}>{name.common}</span>
        <button onClick={() => setShow(!show)}>show</button>
      </div>
      {show ? (
        <div>
          <p>capital: {capital}</p>
          <p>population: {population}</p>
          <h3>Spoken languages</h3>
          <ul>
            {values.map((value) => {
              return <li key={value}>{value}</li>
            })}
          </ul>
          <img alt={flags.alt} srcSet={flags.png}></img>
          <h3> Weather in {capital}</h3>
          <p>
            <strong>temperature: </strong>
            {weather.temperature} celsius
          </p>
          <img
            alt="weather icon"
            srcSet={weather.weather_icons.map((icon) => icon)}
          />
          <p>
            <strong>wind: </strong> {weather.wind_speed} mph direction{' '}
            {weather.wind_degree}
            {weather.wind_dir}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

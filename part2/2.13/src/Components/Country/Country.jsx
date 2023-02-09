import { useState } from 'react'
export default function Country({
  name,
  flags,
  capital,
  population,
  languages,
}) {
  const values = Object.values(languages)

  const [show, setShow] = useState(false)
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
          <h3>languages</h3>
          <ul>
            {values.map((value) => {
              return <li key={value}>{value}</li>
            })}
          </ul>
          <img alt={flags.alt} srcSet={flags.png}></img>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

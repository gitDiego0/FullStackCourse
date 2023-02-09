export default function Country({name, flags, capital, population, languages}){
  
  const values= Object.values(languages)
  return (
    <div>
      <h2>{name.common}</h2>
      <p>capital: {capital}</p>
      <p>population: {population}</p>
      <h3>languages</h3>
      <ul>
        {values.map((value)=>{
          return <li key={value}>{value}</li>
        })}
      </ul>
      <img alt={flags.alt} srcSet={flags.png} ></img>
    </div>
  )
}
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <span>good {good}</span> <br />
      <span>neutral {neutral}</span><br />
      <span>bad {bad}</span><br />
      <span>all {total}</span><br />
      <span>average {(good + neutral - bad) / total}</span><br />
      <span>positive {(good * 100) / total}%</span><br />
    </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header title={'give feedback'} />
      <div >
        <button onClick={handleGood} >good</button>
        <button onClick={handleNeutral} >neutral</button>
        <button onClick={handleBad} >bad</button>
      </div>
      <Header title={'statics'} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

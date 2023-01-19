import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={'give feedback'} />
      <div >
        <button  onClick={() =>setGood(prevGood => prevGood +1)} >good</button>
        <button  onClick={() =>setNeutral(prevNeutral => prevNeutral +1)} >neutral</button>
        <button  onClick={() =>setBad(prevBad => prevBad +1)} >bad</button>
      </div>
      <Header title={'statics'} />
      <span>good {good}</span> <br/>
      <span>neutral {neutral}</span><br/>
      <span>bad {bad}</span><br/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

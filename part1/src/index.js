import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'


const randomizer = () => {
  return Math.floor(Math.random() * 6)
}



const App = (props) => {
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  const votesCopy = [...votes]

  const [selected, setSelected] = useState(0)

  const voteQuote = (selected) => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)

    console.log(votes)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => voteQuote(selected)}>vote</button>
      <button onClick={() => setSelected(randomizer)}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App anecdotes={anecdotes} />)

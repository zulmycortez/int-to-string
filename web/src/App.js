import React, { useState } from 'react'
import axios from 'axios'
import { Input, Button, ErrorView } from './components'
import { capitalizeFirstLetter, intToString } from './utils'
import './App.css'

// turn this variable on if you do not have db/api running locally
// to get the same functionality as if the db/api was running.
const mock = false

const App = () => {
  const [number, setNumber] = useState('')
  const [string, setString] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => { setNumber(e.target.value)}

  const onSubmit = () => {
    setLoading(true)
    if (mock) {
      new Promise(() => {
        setLoading(false);
        setString(capitalizeFirstLetter(intToString(number)));
      })
    } else {
      axios.post(`http://localhost:3001/api/numbers/${number}`)
        .then(res => {
          setLoading(false);
          setString(capitalizeFirstLetter(res.data.output));
          setError(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        })
    }
  }

  return (
    <div className="app">
      <h3>Convert integer to string</h3>
      <Input
        value={number}
        onChange={onChange}
      />
      <Button onClick={onSubmit}>
        Convert
      </Button>
      <p>{loading ? 'Loading...' : string}</p>
      {error && <ErrorView />}
    </div>
  )
}

export default App

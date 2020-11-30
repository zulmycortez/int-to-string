import React, { useState } from 'react'
import axios from 'axios'
import Input from './components/Input'
import Button from './components/Button'
import ErrorView from './components/ErrorView'
import './App.css'

const App = () => {
  const [number, setNumber] = useState('')
  const [string, setString] = useState('')
  const [error, setError] = useState(false)

  const onChange = e => { setNumber(e.target.value)}

  const onSubmit = () => {
    axios.post(`http://localhost:3001/api/numbers/${number}`)
      .then(res => {
        setString(res.data.string);
        setError(false);
      })
      .catch(() => setError(true))
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
      <p>{string}</p>
      {error && <ErrorView />}
    </div>
  )
}

export default App

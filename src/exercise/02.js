// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, {useState, useEffect} from 'react'

const useLocalState = (key, initialValue) => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || initialValue,
  )
  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting ({initialName = ''}) {
  const [name, setName] = useLocalState('name', initialName)

  function handleChange (event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App () {
  return <Greeting />
}

export default App

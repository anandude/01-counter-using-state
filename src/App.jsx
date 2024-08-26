import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue=()=>{
    setCounter(counter+1);
  }

  const subtractValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addValue}>Add 1  </button>{" "}
      <button onClick={subtractValue}>Subtract 1</button>
    </>
  )
}

export default App

import React, { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleSub() {
    setCounter(counter - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div>
      <p>Number: {counter}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App


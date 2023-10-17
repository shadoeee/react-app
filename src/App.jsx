import React, { useState } from 'react'
import ActionButton from './components/actionButton';

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
      <ActionButton handleClick={handleAdd} name="Add"/>
      <ActionButton handleClick={handleSub} name="Sub" />
      <ActionButton handleClick={handleReset} name="Reset" />
    </div>
  )
}

export default App


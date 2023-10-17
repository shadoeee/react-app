import React from 'react'

function ActionButton( { handleClick, name }) {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

export default ActionButton;

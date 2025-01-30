import React from 'react'
import {MyContext} from '../context/MyContext'

function Display() {
    const { counter} = React.useContext(MyContext);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  )
}

export default Display

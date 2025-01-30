import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Control() {
    const { counter, setCounter } = useContext(MyContext);
  
    const increment=()=>{
      setCounter(counter+1)
  }
  
  const decrement=()=>{
      setCounter(counter-1)
  }
  
  return(
      <>
          <button onClick={increment}>Increment</button>
          <br/>
          <button onClick={decrement}>Decrement</button>
      </>
  )
}

export default Control

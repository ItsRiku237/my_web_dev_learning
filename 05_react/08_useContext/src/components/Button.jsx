import React, { useContext } from 'react'
import Component_1 from './Component_1'
import { counterContext } from '../context/context'

const Button = () => {

  const value = useContext(counterContext)

  return (
    <div>
      <button onClick={() => { value.setCount((count) => count + 1) }}>
        <span><Component_1/></span>
        I am a button
      </button>
    </div>
  )
}

export default Button

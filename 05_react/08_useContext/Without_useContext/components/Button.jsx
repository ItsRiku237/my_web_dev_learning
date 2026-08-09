import React, { useState } from 'react'
import Component_1 from './Component_1'

const Button = ({count}) => {
  return (
    <div>
      <button><span><Component_1 count = {count}/></span>I am a button</button>
    </div>
  )
}

export default Button

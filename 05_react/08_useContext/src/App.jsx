import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import { counterContext } from './context/context'


/*
App.jsx
    Navbar.jsx
        Button.jsx
            Component_1.jsx
*/


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <counterContext.Provider value={count}> */}
      {/* we can send like a object and also sen function */}
      <counterContext.Provider value={{ count, setCount }}>

        <Navbar />

        <button
          onClick={() => { setCount((count) => count + 1) }}
        >
          Count is {count}
        </button>

      </counterContext.Provider>
    </>
  )
}

export default App

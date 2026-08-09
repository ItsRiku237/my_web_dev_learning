import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'



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
      <section id="center">

        <Navbar count ={count}/>

        <button
          onClick={() => { setCount((count) => count + 1) }}
        >
          Count is {count}
        </button>

      </section>
    </>
  )
}

export default App

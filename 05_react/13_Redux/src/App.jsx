import { useState } from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/navbar'
import { increment , decrement , multiply} from './redux/counter/counterSlice'

// npm install @reduxjs/toolkit react-redux
// https://redux-toolkit.js.org/tutorials/quick-start
// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux


function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <section id="center">

        <Navbar/>

        <div>
          <button onClick={() => { dispatch(decrement()) }}>-</button>
          Curently  count is {count}
          <button onClick={() => { dispatch(increment()) }}>+</button>
          <button onClick={() => { dispatch(multiply()) }}>x</button>
        </div>

      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
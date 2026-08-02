import { useState, useEffect, useRef } from 'react'
import './App.css'
import Stopwatch from './components/Stopwatch'
import VideoPlayer from './components/Play_pause'
import Form from './components/Focus_text'


//Hook learn : https://react.dev/reference/react/hooks
// useRef : https://react.dev/reference/react/useRef


function App() {
  const [count, setCount] = useState(null)

  const btnRef = useRef(0)

  //It render initialy first then when click butten.
  useEffect(() => {
    console.log(`count rerendering..`)
    btnRef.current.style.backgroundColor = "blue"
  }, [count]);

  // It only initially rerending.
  useEffect(() => {
    console.log(`First rerendering..`)
    btnRef.current.style.backgroundColor = "red"
  }, []);



  return (
    <>
      <section id="center">

        <button
          ref={btnRef}
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>


        <button
          onClick={() => { btnRef.current.style.display = "none" }}
        >
          Change me
        </button>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {/* stopwatch */}
        <div id="docs">
          <ul>
            <li>
              <Stopwatch />
            </li>
          </ul>
        </div>

        <div id="social">
          <h2>Playing and pausing a video</h2>
          <ul>
            <li>
              <VideoPlayer />
            </li>
          </ul>
        </div>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {/* Focusing the input box */}
        <div id="social">
          <ul>
            <li>
              <Form />
            </li>
          </ul>
        </div>

      </section>

    </>
  )
}

export default App

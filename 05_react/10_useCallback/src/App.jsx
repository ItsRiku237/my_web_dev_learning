import { useState, useCallback } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // const getAdjective = ()=>{
  //   return "another" + count
  // }

  // const getAdjective = useCallback(() => {
  //   return "another" + count
  // },[])

  const getAdjective = useCallback(() => {
    return "another" + count
  },[count])



  return (
    <>
      <section id="center">

        <Navbar adjective={"good"} getAdjective={getAdjective} />


        <button onClick={() => {
          setCount((count) => count + 1);
        }}
        >
          Count is {count}
        </button>


      </section>
    </>
  )
}

export default App

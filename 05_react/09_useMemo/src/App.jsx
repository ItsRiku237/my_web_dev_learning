import { useState, useMemo } from 'react'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {

  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // without useMemo:
  // const magical = numbers.find(item=>item.isMagical === true) // Expansive counter

  // With useMemo: case 1
  // const magical = useMemo(() => numbers.find(item=>item.isMagical === true), [])

  // case 2 : (when number change)
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers])


  return (
    <>
      <section id="center">

        <span>Magical number is {magical.index}</span>

        <button onClick={() => {
          setCount((count) => count + 1);
          if (count == 10) {

            //So numbers never changes.
            // The new array is simply created and discarded.
            // It does nothing.

            // new Array(40_000_000).fill(0).map((_, i) => {
            //   return {
            //     index: i,
            //     isMagical: i === 39_000_000
            //   }
            // })

            //Correct version:
            const arr =
              new Array(40000000)
                .fill(0)
                .map((_, i) => ({
                  index: i,
                  isMagical: i === 39000000
                }))

            setNumbers(arr)
          }
        }}
        >
          Count is {count}
        </button>


      </section>
    </>
  )
}

export default App

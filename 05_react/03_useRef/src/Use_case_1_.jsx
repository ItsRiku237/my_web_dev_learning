import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    // let a = 0;
    const a = useRef(0)

    useEffect(() => {
        // a = a + 1
        a.current = a.current + 1;
        console.log(`rerendering and the value of a is ${a.current}..`)
    })

    return (
        <>
            <section id="center">
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </button>
            </section>
        </>
    )
}

export default App

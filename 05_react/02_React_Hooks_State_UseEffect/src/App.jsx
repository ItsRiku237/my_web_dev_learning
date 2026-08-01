import { useEffect, useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";



function App() {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  // const [name, setName] = useState("");   // Inferred as 'string'
  // const [isOpen, setIsOpen] = useState(false); // Inferred as 'boolean'


  useEffect(() => {
    alert("Count was change.")
    setColor(color + 1)
  }, [count])


  return (

    <>
      <Navbar color={"navy " + "blue " + color} />
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update count</button>
    </>

    // <>
    //   <section id="center">
    //     <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
    //       Count is {count}
    //     </button>
    //   </section>
    // </> 
  )
}

export default App
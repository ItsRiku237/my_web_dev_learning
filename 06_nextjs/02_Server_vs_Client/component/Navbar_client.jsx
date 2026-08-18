"use client"
import {React , useState } from 'react'


const Navbar_client = () => {
    const [count, setCount] = useState(0)

    console.log("I am Riku_client")
    
  return (
    <div>
      I am a navbar {count}
      <button onClick ={()=> setCount(count+1)} >Click me</button>
    </div>
  )
}

export default Navbar_client

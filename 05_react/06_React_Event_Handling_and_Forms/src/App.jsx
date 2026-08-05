import { useState } from 'react'
import './App.css'


function App() {
  const [name, setName] = useState("Riku")

  const [form, setForm] = useState({name:"",email:""})

  const handelClick =()=>{
    alert("Hiy I am clicked.")
  }

  const handel_mouse_over =()=>{
    alert("Hiy I am mouse over.")
  }
  
  const handel_change =(e)=>{
    setName(e.target.value)
  }
  
  const handel_form =(e)=>{
    // setForm(e.target.value)
    setForm({...form , [e.target.name]: e.target.value})
    console.log(form)
  }

  return (
    <>
    <section id="center">

      <div className="button">
        <button onClick={handelClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handel_mouse_over}>
        I am Red div
      </div>

      <input type="text" />
      {/* <input type="text" value={name}/> */}
      <input type="text" value={name} onChange={handel_change}/>

      <input type="text" name='name' value={form.name} onChange={handel_form}/>
      <input type="text" name='email' value={form.email} onChange={handel_form}/>
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handel_form}/>

    </section>
    </>
  )
}

export default App

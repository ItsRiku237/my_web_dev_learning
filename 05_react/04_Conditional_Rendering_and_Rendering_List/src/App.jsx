import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setShowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "Riku",
      desc: "Hiy i am Riku"
    },
    {
      title: "Raman",
      desc: "Hiy i am Raman"
    },
    {
      title: "Jubbu",
      desc: "Hiy i am Jubbu"
    }
  ])

  // // This component use to small repeatate task without create another file for that.
  const Todo_simple = () => {
    return (
        <>
        <div className="todo"> I am todo</div>
      </>
    )
  }
  
  
  {/* Method 1 : Rendering list*/}
  const Todo = ({ todo }) => {
    return (<>
      <div className="m-0 bg-yellow-50 border border-1 border-purple-500">

        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>

      </div>
    </>
    )
  }




  return (
    <>
      <section id="center">

        {/* Conditional Rendering : */}

        {/* Conditional Rendering M-1 : (It use for both true , false ) */}
        {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}

        {/* Conditional Rendering M-2 : (It use for only true*/}
        {showbtn && <button>showbtn is true</button>}



        <Todo_simple></Todo_simple>



        {/* Renderin list: */}

        {/* Method 1 : */}
        {todos.map(todo =>{
          return <Todo key={todo.title} todo = {todo}></Todo>
        })}


        {/* Method 2: */}
        {todos.map(todo => {
          return <>
            <div key={todo.title} className="m-2 bg-violet-600 border-2 text-yellow-500">

              <div className="title">{todo.title}</div>
              <div className="desc">{todo.desc}</div>

            </div>
          </>
        })}


        <button
          type="button"
          className="counter"
          onClick={() => setShowbtn(!showbtn)}
        >
          Show button
        </button>

      </section>

    </>
  )
}

export default App

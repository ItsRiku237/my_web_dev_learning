import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



//for installation : npm i react-router-dom

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
      </>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/User/:username",
      element: <><Navbar /><User /></>
    }
  ])


  return (
    <>
      <section id="center">

        <RouterProvider router={router} />

      </section>
    </>
  )
}

export default App

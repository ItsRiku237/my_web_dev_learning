import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

// npm install react-hook-form

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  // custom delay for learning :
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {

    // await delay(2)// Simulating network delay

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)
    })
    let res = await r.text()

    console.log(data, res)

    // For custom error from server or backend :
    if (data.username !== "shubham") {
      setError("myform", { message: "Your form is not in good order because credentials are invalid" })
    }
    if (data.username === "rohan") {
      setError("blocked", { message: "Sorry this user is blocked" })
    }

  }

  return (
    <>
      <section id="center">

        {isSubmitting && <div>Loadding...</div>}

        <div className="container" onSubmit={handleSubmit(onSubmit)}>
          <form action="" >

            {/* Without hook-form : */}
            {/* <input type="text" name='userName'/>
        <input type="password" name='password' id=''/>
        <input type="submit" value="Submit"/> */}

              {/* with hook-form  but no custom error: */}
            {/* <input placeholder='User Name' {...register("username") , { required: true , minLength: 3 , maxLength:8}}type="text" />
            {errors.username && <div className='red'>{errors.username.message}</div>} */}

            {/* <input placeholder='User Name' {...register("username", { required: true , minLength: 3 , maxLength:8}) }type="text" />
            {errors.username && <div className='red'>{errors.username.message}</div>} */}


              {/* With hook-form (Correct): */}
            <input placeholder='User Name' {...register("username", { required: { value: true, message: "This fild required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
            {errors.username && <div className='red'> {errors.username.message}</div>}

            <br />

            <input placeholder='password' {...register("password", { required: { value: true, message: "This fild required" }, minLength: { value: 3, message: "Min length of pass is 3" } })} type="password" />
            {errors.password && <div className='red'>{errors.password.message}</div>}

            <br />

            <input disabled={isSubmitting} type="submit" value="Submit" />
            {errors.myform && <div className='red'>{errors.myform.message}</div>}
            {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

          </form>

        </div>

      </section>
    </>
  )
}

export default App
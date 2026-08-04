import { useEffect, useState } from 'react'
import './App.css'

// You have to use an api and display the data in the form of a card under a 
// container. All the data points returned by the API should be converted to a
//  card Use this API: https://jsonplaceholder.typicode.com/posts

// Hint: Create a state for the data which will be fetched using the Json 
// Placeholder API Inside useEffect, use fetch to populate that state and then
//  use map to render the cards from that state

function App() {
  
  const [data, setdata] = useState([])
  



  // Method 1:
  async function fetchData() {

    // Go to the link (the API)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    //  Change the answer into text/JSON
    const data = await response.json()
    console.log(data)

    // 5. Put the answer into your mailbox (save to state)
    setdata(data)
  }

  // Tell React to go get the data when the page loads first time
  useEffect(() => {
    fetchData()
  }, [])




  // Method 2  :
  // useEffect(() => {

  //   async function fetchData() {

  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const data = await response.json()

  //     console.log(data)

  //     setdata(data)
  //   }
  //   fetchData()
  // }, [])



  return (
    <>

      <div className="container">

        {data.map(card => {
          return <>
            <div key={card.id} className="card">

              <div className="id">{card.id}</div>
              <h1 className="title">{card.title}</h1>
              <p className="body">{card.body}</p>
              <span className='user_id'>By: User_id : {card.userId}</span>

            </div>

          </>
        })}
      </div>

    </>
  )
}

export default App

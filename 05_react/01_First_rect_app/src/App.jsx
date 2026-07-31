import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar/>

      <div className="cards">
      <Card title ="Card 1" description="Card 1 desc."/>
      <Card title ="Card 2" description="Card 2 desc."/>
      <Card title ="Card 3" description="Card 3 desc."/>
      <Card title ="Card 4" description="Card 4 desc."/>
      <Card title ="Card 5" description="Card 5 desc."/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
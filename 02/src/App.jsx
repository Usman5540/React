import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <Card   username="cutee"  btnText="click now hare"/>
  <Card  username="shiny"  btnText="proceed"/>
  <Card  username="sunny"  btnText="visit me "/>
  

  
  

    </>
  )
}

export default App

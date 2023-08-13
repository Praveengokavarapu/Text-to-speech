import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default App
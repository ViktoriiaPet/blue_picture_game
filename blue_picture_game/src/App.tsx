
import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { useState } from 'react'
function App() {
  const [isGameRunning, setIsGameRunning] = useState(false)

  function handleClickFromStartPage () {
    setIsGameRunning(true)
  }
  return (
    <>
        <StartScreen onSendStatusGame = {handleClickFromStartPage}/>
         </>
  )
}

export default App

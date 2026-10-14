
import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { GalleryScene } from './components/GalleryScene/GalleryScene'
import { useState } from 'react'
function App() {
  const [isGameRunning, setIsGameRunning] = useState(false)

  function handleClickFromStartPage () {
    setIsGameRunning(true)
  }
  return (
    <>
    {isGameRunning ? (
      <GalleryScene />
     ) : (
      <StartScreen onSendStatusGame = {handleClickFromStartPage}/>
     )}
        
         </>
  )
}

export default App

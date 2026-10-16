
import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { GalleryScene } from './components/GalleryScene/GalleryScene'
import { useState, type ReactElement } from 'react'
import { ClarasDispatch } from './components/roomsScene/ClaraDispatch'
import { DanielsDispatch } from './components/roomsScene/DanielDispatch'
import { StaffRoom } from './components/roomsScene/StaffRoom'
import type{ CurrentRoomType } from './types/gameState'
import { initialGameState } from './data/initialGameState'



function App() {
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [currentRoom, setCurrentRoom] = useState("Gallery")
  const [gameState, setGameState] = useState(initialGameState)

  function handleClickFromStartPage () {
    setIsGameRunning(true)
  }
  const handleChangeRoom =(roomName: CurrentRoomType) => {
    setCurrentRoom(roomName)
  }

      const handleSetDialogGame = (id: string) => {
          setGameState(prev => ({
      ...prev,
      displayedReplies: [...prev.displayedReplies, id]
  }));
      }
  
      const handleSetClueGame = (id: string) => {
          setGameState(prev => ({
      ...prev,
      evidenceFound: prev.evidenceFound.includes(id)
              ? prev.evidenceFound
              : [...prev.evidenceFound, id]
  }));
      }


    let component:ReactElement
    switch(currentRoom) {
      case "DanielsDispatch":
        component = <DanielsDispatch currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
        break;
      case "ClarasDispatch":
        component = <ClarasDispatch currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
        break;
      case "StaffRoom":
        component = <StaffRoom currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
        break;
      default:
        component = <GalleryScene currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
    }
    console.log(currentRoom)
  return (
    <>
    {!isGameRunning ? (<StartScreen onSendStatusGame = {handleClickFromStartPage}/>) :
    <>{component}</>
    }
         </>
  )
}

export default App

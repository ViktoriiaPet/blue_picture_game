
import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { GalleryScene } from './components/GalleryScene/GalleryScene'
import { useState, type ReactElement } from 'react'
import { ClarasDispatch } from './components/roomsScene/ClaraDispatch'
import { DanielsDispatch } from './components/roomsScene/DanielDispatch'
import { StaffRoom } from './components/roomsScene/StaffRoom'
import type{ CurrentRoomType } from './types/gameState'
import { initialGameState } from './data/initialGameState'
import { GameButton } from './components/StartScreen/GameButton'
import { AccusationModal } from './AccusationModal'
import type{ CharacterId } from './types/dialogue'
import { Finaldialog } from './FinalDialog'
import { sofiaDialogs } from './data/dialogues/dialogues'

function App() {
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [currentRoom, setCurrentRoom] = useState("Gallery")
  const [gameState, setGameState] = useState(initialGameState)
  const [isOpenAccusation, setIsOpenAccusation] = useState(false)
  const [isFoundedLodron, setIsFoundedLondron] = useState(false)


    const handleOpenAcustation = ()=> {
        setIsOpenAccusation(true)
    }
    const handleCloseAcustation = ()=> {
        setIsOpenAccusation(false)
    }
    const handleAccusation = (suspectId: CharacterId) => {
      if (suspectId === "sofia") {
        setIsFoundedLondron(true)
        console.log("you win", confession)
      } else {
        console.log("You need to investigate more")
      }
    }
    const handleCloseResultAcustation = () => {
      setIsFoundedLondron(false)
    }
  let isPictureFound = gameState.evidenceFound.includes("picture")

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

      const confession = sofiaDialogs.find(
  (item) => item.id === "sofiaConfession"
);


    let component:ReactElement
    switch(currentRoom) {
      case "DanielsDispatch":
        component = <DanielsDispatch currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
        break;
      case "ClarasDispatch":
        component = <ClarasDispatch currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
        break;
      case "StaffRoom":
        if(gameState.displayedReplies.includes("claraPermissionRoom")){
          component = <StaffRoom currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
        } else {
          component = <GalleryScene currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState} />;
        } 
        break;
      default:
        component = <GalleryScene currentRoomFunction = {handleChangeRoom} handleSetDialogGame={handleSetDialogGame} handleSetClueGame= {handleSetClueGame} gameState={gameState}/>;
    }
    console.log(currentRoom)
  return (
    <>
    {!isGameRunning ? (<StartScreen onSendStatusGame = {handleClickFromStartPage}/>) :
    <div className='game-container'>
    <>{component}</>
    {isPictureFound && <div className='acusar-button'><GameButton text= "Acusar" buttonOnClick={handleOpenAcustation} /></div> }
    {isOpenAccusation && <AccusationModal onClose={()=>{handleCloseAcustation()}} onAccusation ={handleAccusation}/>}
      {isFoundedLodron && confession && <Finaldialog onClose = {handleCloseResultAcustation} dialogue={confession}/>}
    </div>

    }
         </>
  )
}

export default App

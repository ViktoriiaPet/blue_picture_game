import "./rooms.css"
import type{ CurrentRoomFunctionType } from "../GalleryScene/GalleryScene"
import { useState } from "react"
import type { Clue } from "../../types/clueType"
import { ClueModal } from "../ClueModal"
import { clues } from "../../data/clues/clues"
import { assetPath } from "../../utils/assetPath"


export function StaffRoom (currentRoomFunction: CurrentRoomFunctionType) {
    const [selectedClue, setSelectedClue] = useState <Clue|null> (null)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isMoved, setIsMoved] = useState(false);



    const handleClueClick = (id:string) => {
        const clue = clues.find((clue) => id === clue.id)
        if(clue) {
        currentRoomFunction.handleSetClueGame(id)
        setSelectedClue(clue)
        setIsOpenModal(true)
        }

    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    return(
        <section className="staff-room-scene">
        <img src={assetPath("/images/claves/sofyListDown.png")} alt="Sofy todo list" className="to-do-list-clue" onClick={()=> (handleClueClick("todolistSofia"))}/>
        <img src={assetPath("/images/claves/suelo.png")} alt="suelo estropeado" className="suelo-staff-clue" onClick={()=> (handleClueClick("sueloEstropeado"))}/>
        
        <img src={assetPath("/images/claves/three-block.png")} alt="block" className={`block-staff-clue ${isMoved ? "moved" : ""}`} onClick={() => setIsMoved(true)}/>
        <img src={assetPath("/images/claves/picture.png")} alt="picture" className="picture-staff-clue" onClick={()=> (handleClueClick("picture"))}/>
        <img src = {assetPath("/images/arrows/leftArrow.png")} alt="Left arrow navigation" className="left-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("Gallery")}/>
        {isOpenModal && selectedClue && <ClueModal clue = {selectedClue} onClose = {handleCloseModal}/>}
       
        </section>
    )
}
import "./rooms.css"
import type{ CurrentRoomFunctionType } from "../GalleryScene/GalleryScene"
import { useState } from "react"
import type { Clue } from "../../types/clueType"
import { ClueModal } from "../ClueModal"
import { clues } from "../../data/clues/clues"

export function DanielsDispatch (currentRoomFunction: CurrentRoomFunctionType) {
    const [selectedClue, setSelectedClue] = useState <Clue|null> (null)
    const [isOpenModal, setIsOpenModal] = useState(false)

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
        <section className="daniel-dispatch-scene">
        <img src="/images/claves/ticket.png" alt="Daniel's ticket" className="ticket-clue"  onClick={()=> (handleClueClick("ticketDaniel"))}/>
         <img src="/images/arrows/rightArrow.png" alt="Right arrow navigation" className="right-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("Gallery")}/>
         {isOpenModal && selectedClue && <ClueModal clue = {selectedClue} onClose = {handleCloseModal}/>}
        </section>
    )
}
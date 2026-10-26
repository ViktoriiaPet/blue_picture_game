import "./rooms.css"
import type{ CurrentRoomFunctionType } from "../GalleryScene/GalleryScene"
import { useState } from "react"
import { ClueModal } from "../ClueModal"
import { clues } from "../../data/clues/clues"
import type { Clue } from "../../types/clueType"
import { assetPath } from "../../utils/assetPath"

export function ClarasDispatch (currentRoomFunction: CurrentRoomFunctionType) {
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
        <section className="clara-dispatch-scene">
            <img src={assetPath("/images/claves/photo1.png")} alt="Photo 1 by Sofia" className="photo-position1-clue" onClick={()=> (handleClueClick("photoWithoutPicture"))}/>
            <img src={assetPath("/images/claves/photo2.png")} alt="Photo 2 by Sofia" className="photo-position2-clue" onClick={()=> (handleClueClick("photoWithPicture"))} />
            <img src={assetPath("/images/arrows/upArrow.png")} alt="Up arrow navigation" className="up-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("Gallery")}/>
            {isOpenModal && selectedClue && <ClueModal clue = {selectedClue} onClose = {handleCloseModal}/>}
        </section>
    )
}
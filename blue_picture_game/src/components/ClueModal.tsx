
import type{ Clue } from "../types/clueType"

type ClueModalProps = {
    onClose: ()=>void,
    clue: Clue
}

export function ClueModal (ClueModalProps:ClueModalProps){
    const handleCloseModal = () => {
        ClueModalProps.onClose()
    }
        return(
            <div className="wrapper-modal">
                <div className="clue-modal-window">
                    <div>{ClueModalProps.clue.title}</div>
                    <div>{ClueModalProps.clue.description}</div>
                    <img src = {ClueModalProps.clue.image} alt={ClueModalProps.clue.title} />
                    <div onClick={handleCloseModal}>X</div>
                </div>
            </div>
        )
}
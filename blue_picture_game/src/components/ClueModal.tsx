
import type{ Clue } from "../types/clueType"
import { assetPath } from "../utils/assetPath"
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
                    <div className="clue-title">{ClueModalProps.clue.title}</div>
                    <div className="clue-description">{ClueModalProps.clue.description}</div>
                    <img src = {assetPath(ClueModalProps.clue.image)} alt={ClueModalProps.clue.title} />
                    <div onClick={handleCloseModal} className="cruz">X</div>
                </div>
            </div>
        )
}
import type { DialogLine } from "../types/dialogue"

type FinalDialogueProps ={
    onClose: ()=> void,
    dialogue: DialogLine
}

export function Finaldialog (FinalDialogueProps: FinalDialogueProps) {
    console.log(FinalDialogueProps.dialogue)
    const imagePath = `images/persons/${FinalDialogueProps.dialogue.character}/soSad.png`
    const namePerson = FinalDialogueProps.dialogue.character[0].toUpperCase() + FinalDialogueProps.dialogue.character.slice(1)
    return (<div className="warning-wrapper">
        <div className="cruz" onClick={FinalDialogueProps.onClose}>X</div>
        <div className="final-dialog-window">
            <p className="dialogue-name">Conclusión</p>
        <div className="final-dialog">
            
            <div className="final-information-block">
                <img className="suspect-photo" src={imagePath} alt="image person" />
                <p className="dialogue-name">{namePerson}</p>
            </div>
            <div>
                <p className="dialogue-text">{FinalDialogueProps.dialogue.text}</p>
            </div>
        </div>
        </div>

    </div>)
}
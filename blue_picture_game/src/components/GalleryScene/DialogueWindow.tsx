
import { useState } from "react"
import { GameButton } from "../StartScreen/GameButton"
import type { DialogLine } from "../../types/dialogue"
type DialogWinsowProp = {
    onClose : () => void,
    text : string,
    dialogue: DialogLine | null,
    gameSetAddDialog: (id:string) => void
}

export function DialogueWindow(DialogueWindowData: DialogWinsowProp) {
const [lineNumber, setLineNumber] = useState(0)
const dialogLengh = DialogueWindowData.dialogue?.text.length
const handleClickNext = ():void => {
    const counter = lineNumber+1
    setLineNumber(counter)
    if(dialogLengh) {
    if ((dialogLengh-2 === lineNumber || dialogLengh-1 === lineNumber) && DialogueWindowData.dialogue) {
    DialogueWindowData.gameSetAddDialog(DialogueWindowData.dialogue?.id)
    }
}
}
const namePerson = DialogueWindowData.text[0].toUpperCase() + DialogueWindowData.text.slice(1)
const imagePath = `/images/persons/${DialogueWindowData.dialogue?.character}/${DialogueWindowData.dialogue?.mood}.png`


    return(
        <div className="dialog-window dialogue-box">
            <div onClick={DialogueWindowData.onClose} className="dialogue-close">
                <p>X</p>
            </div>
            <div className="dialogue-name">
                <p>{namePerson}</p>
            </div>
            
                {DialogueWindowData.dialogue && (
                <>
                <div className="dialogue-photo">
                     <img src={imagePath} alt="character image" />
                </div>
               
                <p className=" dialogue-text">{DialogueWindowData.dialogue.text[lineNumber]}</p>
                <div className="dialogue-next">
                {dialogLengh && lineNumber >= dialogLengh - 1 ? (
                    <GameButton text="Cerrar" buttonOnClick={DialogueWindowData.onClose} />
                ) : (
                     <GameButton text="Siguiente" buttonOnClick={handleClickNext} />
                )}
                </div>
                </>)
                }

            
        </div>
    )

}
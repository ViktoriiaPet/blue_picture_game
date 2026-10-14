
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



    return(
        <div>
            <div onClick={DialogueWindowData.onClose}>
                <p>X</p>
            </div>
            <div>
                <p>{DialogueWindowData.text}</p>
            </div>
            <div>
                {DialogueWindowData.dialogue && (
                <>
                <p>{DialogueWindowData.dialogue.text[lineNumber]}</p>
                {dialogLengh && lineNumber >= dialogLengh - 1 ? (
                    <GameButton text="cerrar" buttonOnClick={DialogueWindowData.onClose} />
                ) : (
                     <GameButton text="siguiente" buttonOnClick={handleClickNext} />
                )}
                </>)
                }

            </div>
        </div>
    )

}
import type{ DialogLine } from "../types/dialogue";
import type{ GameStateType } from "../types/gameState";
export function selectDialogue (dialogArray:DialogLine[], gameState: GameStateType): DialogLine | null {
    const availableDialogs = 
    dialogArray.filter((dialog)=> dialog.requires.every((clue)=> gameState.evidenceFound.includes(clue))
     && (dialog.requiresDialogs ?? []).every((clue)=>gameState.displayedReplies.includes(clue)))
        
        
    const newDialogs = availableDialogs.filter((dialogue) => {
        if(dialogue.repeatable === false && gameState.displayedReplies.includes(dialogue.id)) {
            return false
        } else {
            return true
        }
    })
    function comparar(a:DialogLine, b:DialogLine) {return b.priority - a.priority;}
    const newDialogsSort = [...newDialogs].sort(comparar)
    return newDialogsSort[0] ?? null
}
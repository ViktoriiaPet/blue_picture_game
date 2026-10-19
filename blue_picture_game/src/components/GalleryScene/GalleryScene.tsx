import "./GalleryScene.css";
import { useState } from "react";
import { DialogueWindow } from "./DialogueWindow";

import { claraDialogs } from "../../data/dialogues/dialogues";
import { danielDialogs } from "../../data/dialogues/dialogues";
import { sofiaDialogs } from "../../data/dialogues/dialogues";
import { selectDialogue } from "../../utils/selectDialogue";
import type { DialogLine } from "../../types/dialogue";
import type{ CurrentRoomType } from "../../types/gameState";
import type { GameStateType } from "../../types/gameState";
import { WarningPopup } from "../WarningPopup";

export type CurrentRoomFunctionType = {
    currentRoomFunction: (currentRoom: CurrentRoomType)=> void,
    handleSetDialogGame: (id:string) => void
    gameState: GameStateType
    handleSetClueGame: (id:string) => void
}

export function GalleryScene (currentRoomFunction: CurrentRoomFunctionType) {
    const [isSelect, setIsSelect] = useState<string | null>(null);
    const [isOpenDialod, setIsOpenDialod] = useState(true)
    const [availableDialogues, setAvailableDialogues] = useState<DialogLine[]>([]);
    const [currentDialogue, setCurrentDialogue] = useState<DialogLine | null>(null);
    const [isOpenWarning, setIsOpenWarning] = useState(false)

    const getDialogues = (name: string): DialogLine[] => {
    if (name === "clara") return selectDialogue(claraDialogs, currentRoomFunction.gameState);
    if (name === "daniel") return selectDialogue(danielDialogs, currentRoomFunction.gameState);
    if (name === "sofia") return selectDialogue(sofiaDialogs, currentRoomFunction.gameState);

    return [];
}
    const handleCloseWarning = () => {
        setIsOpenWarning(false)
    }

    const handleOpenWarning = () => {
        if(!currentRoomFunction.gameState.displayedReplies.includes("claraPermissionRoom"))
        {
            setIsOpenWarning(true)    
        } else {
            currentRoomFunction.currentRoomFunction("StaffRoom")
        }
       

    }
const getRepeatDialogue = (name: string): DialogLine | null => {
    let dialogArray: DialogLine[];

    if (name === "clara") dialogArray = claraDialogs;
    else if (name === "daniel") dialogArray = danielDialogs;
    else if (name === "sofia") dialogArray = sofiaDialogs;
    else return null;

    return dialogArray.find((dialogue) => dialogue.repeatable) ?? null;
}

const handleClick = (name: string): void => {
    setIsSelect(name);
    setIsOpenDialod(true);

    const topics = getDialogues(name);

    if (topics.length === 0) {
        setCurrentDialogue(getRepeatDialogue(name));
        setAvailableDialogues([]);
    } else if (topics.length === 1) {
        setCurrentDialogue(topics[0]);
        setAvailableDialogues([]);
    } else {
        setCurrentDialogue(null);
        setAvailableDialogues(topics);
    }
};
    const handleSelectDialogue = (dialogue: DialogLine) => {
        setCurrentDialogue(dialogue);
        setAvailableDialogues([]);
};
    const handleClose = () => {
        setIsOpenDialod(false)
    }


    
    return(
        <section className="gallery-scene">
            
{isOpenDialod && isSelect && availableDialogues.length > 0 && (
    <div className="dialogue-topics">
        {availableDialogues.map((dialogue) => (
            <button
                key={dialogue.id}
                onClick={() => handleSelectDialogue(dialogue)}
            >
                {dialogue.title}
            </button>
        ))}
    </div>
)}

{isOpenDialod && isSelect && currentDialogue && (
    <DialogueWindow
        onClose={handleClose}
        text={isSelect}
        dialogue={currentDialogue}
        gameSetAddDialog={currentRoomFunction.handleSetDialogGame}
    />
)}
                
            
            <img onClick={()=> handleClick("clara")} src="/images/persons/Clara-full-cut.png" alt="Clara person" className="clara-position"/>
            <img onClick={()=> handleClick("sofia")} src="/images/persons/Sofia-full-cut.png" alt="Sofia person" className="sofia-position"/>
            <img onClick={()=> handleClick("daniel")} src="/images/persons/men-full-only.png" alt="Daniel person" className="daniel-position"/>
            <img src="/images/arrows/leftArrow.png" alt="Left arrow navigation" className="left-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("DanielsDispatch")} />
            <img src="/images/arrows/rightArrow.png" alt="Right arrow navigation" className="right-arrow" onClick = {() => {handleOpenWarning()}}/>
            {isOpenWarning && <WarningPopup text = "No puedes entrar en la sala del personal sin permiso" onClose = {handleCloseWarning}/> }
            <img src="/images/arrows/downArrow.png" alt="Down arrow navigation" className="down-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("ClarasDispatch")}/>
        </section>
    )
}
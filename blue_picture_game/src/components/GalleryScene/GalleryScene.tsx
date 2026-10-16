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

export type CurrentRoomFunctionType = {
    currentRoomFunction: (currentRoom: CurrentRoomType)=> void,
    handleSetDialogGame: (id:string) => void
    gameState: GameStateType
    handleSetClueGame: (id:string) => void
}

export function GalleryScene (currentRoomFunction: CurrentRoomFunctionType) {
    const [isSelect, setIsSelect] = useState<string | null>(null);
    const [isOpenDialod, setIsOpenDialod] = useState(true)

    const [currentDialogue, setCurrentDialogue] = useState<DialogLine | null>(null);
    const handleClick = (name:string):void => {
            setIsSelect(name)
            setIsOpenDialod(true)
            if(name==="clara"){
                setCurrentDialogue(selectDialogue(claraDialogs, currentRoomFunction.gameState));
            }
            if(name==="daniel"){
                setCurrentDialogue(selectDialogue(danielDialogs, currentRoomFunction.gameState));
            }
            if(name==="sofia"){
                setCurrentDialogue(selectDialogue(sofiaDialogs, currentRoomFunction.gameState));
            }
    }
    const handleClose = () => {
        setIsOpenDialod(false)
    }


    
    return(
        <section className="gallery-scene">
            
           {isOpenDialod && isSelect &&
                <DialogueWindow onClose = {handleClose} text = {isSelect} dialogue = {currentDialogue} gameSetAddDialog = {currentRoomFunction.handleSetDialogGame}/>
           } 
                
            
            <img onClick={()=> handleClick("clara")} src="/images/persons/Clara-full-cut.png" alt="Clara person" className="clara-position"/>
            <img onClick={()=> handleClick("sofia")} src="/images/persons/Sofia-full-cut.png" alt="Sofia person" className="sofia-position"/>
            <img onClick={()=> handleClick("daniel")} src="/images/persons/men-full-only.png" alt="Daniel person" className="daniel-position"/>
            <img src="/images/arrows/leftArrow.png" alt="Left arrow navigation" className="left-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("DanielsDispatch")} />
            <img src="/images/arrows/rightArrow.png" alt="Right arrow navigation" className="right-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("StaffRoom")}/>
            <img src="/images/arrows/downArrow.png" alt="Down arrow navigation" className="down-arrow" onClick = {() => currentRoomFunction.currentRoomFunction("ClarasDispatch")}/>
        </section>
    )
}
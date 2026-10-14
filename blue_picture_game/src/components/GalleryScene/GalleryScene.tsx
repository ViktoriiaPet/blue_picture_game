import "./GalleryScene.css";
import { useState } from "react";
import { DialogueWindow } from "./DialogueWindow";
import { initialGameState } from "../../data/initialGameState";
import { claraDialogs } from "../../data/dialogues/dialogues";
import { selectDialogue } from "../../utils/selectDialogue";
import type { DialogLine } from "../../types/dialogue";

export function GalleryScene () {
    const [isSelect, setIsSelect] = useState<string | null>(null);
    const [isOpenDialod, setIsOpenDialod] = useState(true)
    const [gameState, setGameState] = useState(initialGameState)
    const [currentDialogue, setCurrentDialogue] = useState<DialogLine | null>(null);
    const handleClick = (name:string):void => {
            setIsSelect(name)
            setIsOpenDialod(true)
            if(name==="clara"){
                setCurrentDialogue(selectDialogue(claraDialogs, gameState));
            }
    }
    const handleClose = () => {
        setIsOpenDialod(false)
    }
    const handleSetGame = (id: string) => {
        setGameState(prev => ({
    ...prev,
    displayedReplies: [...prev.displayedReplies, id]
}));
    }

    
    return(
        <section className="gallery-scene">
            
           {isOpenDialod && isSelect &&
                <DialogueWindow onClose = {handleClose} text = {isSelect} dialogue = {currentDialogue} gameSetAddDialog = {handleSetGame}/>
           } 
                
            
            <img onClick={()=> handleClick("clara")} src="/images/persons/Clara-full-cut.png" alt="Clara person" className="clara-position"/>
            <img onClick={()=> handleClick("sofia")} src="/images/persons/Sofia-full-cut.png" alt="Sofia person" className="sofia-position"/>
            <img onClick={()=> handleClick("daniel")} src="/images/persons/men-full-only.png" alt="Daniel person" className="daniel-position"/>
        </section>
    )
}

import { roles } from "./data/suspects";
import type { CharacterId } from "./types/dialogue";
import { useState } from "react";
import { GameButton } from "./components/StartScreen/GameButton";

type AccusationModalProps ={
    onClose: () => void,
    onAccusation: (suspectId: CharacterId) => void
}



export function AccusationModal (AccusationModalProps:AccusationModalProps) {
const [selectedPerson, setSelectedPerson] = useState <CharacterId|null>(null)
const handleSelectPerson = (id:CharacterId) => {
    setSelectedPerson(id)
}
const handleClickAcusar = () => {
    if(selectedPerson) {
        AccusationModalProps.onAccusation(selectedPerson)
        AccusationModalProps.onClose()
    }
    
};


return(
    <div className="wrapper-modal">
    <div className="suspect-block">
        <div className="dialogue-name">¿A quién acusas?</div>
        <div onClick={AccusationModalProps.onClose} className="cruz">X</div>
        <div className="persons-list">
            {
                roles.map((item) => {
                    return (
                        <div className={`suspect-card ${selectedPerson === item.id ? "selected" : ""}`} key={item.id} onClick={() => {handleSelectPerson(item.id)}}>

                            <div className="dialogue-name"> {item.name} </div>

                            <img className="suspect-photo" src={item.image}/>
                            <div className="dialogue-text"> {item.role} </div>
                            <div className="dialogue-text" > {item.description} </div>
                        </div>
                    )
                })
            }
        </div>
        <div> <GameButton text= "Acusar" buttonOnClick = {()=> {handleClickAcusar()}}/></div>
           
    </div>
    </div>
    

)
}
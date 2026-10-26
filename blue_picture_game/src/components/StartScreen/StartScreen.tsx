
import { useState } from "react"
import { GameButton } from "./GameButton"
import { primaryInformation } from "../../data/primaryHistory"

type StartScreenProps = {
    onSendStatusGame: () => void
}

export function StartScreen(onSendStatusGame: StartScreenProps) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleOpenModal= () => {
        setIsOpenModal(true)
    }
    const handleCloseModal =()=> {
        setIsOpenModal(false)
    }
    const handleChangeSlide = (signo: string) => {
        if(signo === "plus" && currentSlide<3) {
            setCurrentSlide(prev => prev +1)
        } else if (signo === "minus" && currentSlide>0) {
            setCurrentSlide(prev => prev -1)
        }
    }
    const handleClickParent = onSendStatusGame.onSendStatusGame
    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === primaryInformation.length-1;
    return (

    <div className="start-screen">
        <img src="/images/startPicture.png" alt="An empty frame in an art gallery" />

        {isOpenModal && 
        <div className="primary-history-block">
            <div className="cruz-primary" onClick={handleCloseModal}>X</div>
            <div className="primary-history-block-second">
            
            <p className="primary-text"><strong>{primaryInformation[currentSlide].title}</strong></p>
            <p className="primary-text">{primaryInformation[currentSlide].text}</p>
            <img className="primary-slide-photo" src={primaryInformation[currentSlide].photo} alt="slide photo" />
            
            </div>
            { !isLastSlide && <div onClick={ () => {handleChangeSlide("plus")} } ><img className="right-arrow-history" src="/images/arrows/rightArrow.png" alt="right arrow" /></div>}
            { !isFirstSlide && <div onClick={() => {handleChangeSlide("minus")} } ><img className="left-arrow-history" src="/images/arrows/leftArrow.png" alt="left arrow" /></div>}
            
            </div>
            
        }
        <div style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2vw"

        }}>
            < GameButton text = {"Comenzar el juego"} buttonOnClick = {handleClickParent}  />
            < GameButton text = {"Historia y reglas"} buttonOnClick = {handleOpenModal}  />
        </div>
        
        
    </div>
    )
}
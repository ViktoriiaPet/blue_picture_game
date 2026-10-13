
import { GameButton } from "./GameButton"

type StartScreenProps = {
    onSendStatusGame: () => void
}

export function StartScreen(onSendStatusGame: StartScreenProps) {
    const handleClickParent = onSendStatusGame.onSendStatusGame

    return (

    <div className="start-screen">
        <img src="/public/images/startPicture.png" alt="An empty frame in an art gallery" />
        <div style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)"
        }}>
            < GameButton text = {"Start Game"} buttonOnClick = {handleClickParent}  />
        </div>
        
        
    </div>
    )
}
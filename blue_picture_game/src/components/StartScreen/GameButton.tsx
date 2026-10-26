type GameButtonProps = {
    buttonOnClick? : () => void,
    text : string
    
}

export function GameButton (gameButtonProps : GameButtonProps) {
    const {buttonOnClick, text} = gameButtonProps
    return (
      <button className="game-primary-button" onClick={buttonOnClick}>
    <p> {text} </p>
</button>  
    )

}
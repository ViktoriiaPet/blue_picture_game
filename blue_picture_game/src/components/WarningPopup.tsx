type WarningPopupProps = {
    text: string,
    onClose: () => void,

}

export function WarningPopup (warningData:WarningPopupProps) {
    const handleClose = () => {
        warningData.onClose()
    }
    return(
        <div className="warning-wrapper">
        <div className="warning-popup">
            <div className="cruz" onClick={handleClose}>X</div>
            <div>
            <p className="name-warning" >Atención</p>
            <p className="text-warning"> {warningData.text} </p>
            </div>
        </div>
</div>
    )
}
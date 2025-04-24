import "./RemoveButton.css"


const RemoveButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="remove">Remove</button>
    )   
}

export default RemoveButton
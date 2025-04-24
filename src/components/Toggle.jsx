import "./Toggle.css"


const Toggle = ({isActive, onClick}) => {



        return (
        <div className="toggle">
                <input aria-label="toggle" onClick={() => onClick()} defaultChecked={isActive} type="checkbox" name="toggle input"/>
        </div>
    )
}

export default Toggle
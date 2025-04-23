import "./Card.css"
import Toggle from "./Toggle";

const Card = ({name, description, logo, isActive, onToggle}) => {
    
 

    return (
            <div className="card">


                <div className="card_content">
                    <img src={logo} width='50' alt=""/>


                    <div className="head">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>


                </div>

                <div className="control">
                    <button className="remove">Remove</button>


                    <Toggle onClick={onToggle} isActive={isActive} />
                </div>


            </div>

    )
}


export default Card;
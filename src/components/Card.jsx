import "./Card.css"
import RemoveButton from "./RemoveButton";
import Toggle from "./Toggle";

const Card = ({name, description, logo, isActive, onToggle, onRemove}) => {
    
 

    return (
            <div className="card">


                <div className="card_content">
                    <img src={logo} width='50' alt=""/>


                    <div className="head">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>


                </div>

                <div className="control">
                  
                    <RemoveButton onClick={onRemove}/>

                    <Toggle onClick={onToggle} isActive={isActive} />
                </div>


            </div>

    )
}


export default Card;
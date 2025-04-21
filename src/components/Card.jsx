import "./Card.css"
import Toggle from "./Toggle";

const Card = ({name, description, logo}) => {
    console.log(logo)
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
                    <Toggle />
                </div>


            </div>

    )
}


export default Card;
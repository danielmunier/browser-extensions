import data from "../data.json"
import Card from "./Card"
import "./CardGrid.css"


const CardGrid = () => {
  return (
    <div className="grid">
      {
        data.map((card, index) =>
          
          (
          <Card name={card.name} description={card.description} logo={card.logo} />
          
        )
          
          
        )
      }
    </div>

  )

}


export default CardGrid
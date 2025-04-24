import { useEffect, useState } from "react"
import data from "../data.json"
import Card from "./Card"
import "./CardGrid.css"
import FilterButton from "./FilterButton"


const CardGrid = () => {
  const [filter, setFilter] = useState("All")
  
  const [cards, setCards] = useState(() => {
    let cardStorage = localStorage.getItem("cards")
    cardStorage = JSON.parse(cardStorage)
    
    
    return cardStorage ? cardStorage : data
    
    
  })
  
  
  useEffect(() => {
    let cardString = JSON.stringify(cards)
    localStorage.setItem("cards", cardString)
  }

    , [cards])

  const removeCard = (name) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== name))
  }

  const toggleCard = (name) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.name === name ? { ...card, isActive: !card.isActive } : card
      )
    )
  }

  const toggleFilter = (filter) => {
    setFilter(filter)
  }


  const filters = ["All", "Active", "Inactive"]

  const filteredCards = cards.filter((card) => {
    if (filter === "Active") return card.isActive;
    if (filter === "Inactive") return !card.isActive;
    return true;
  });

  return (
    <div>

      <div className="header">
        <h1>Extension List</h1>
        <div className="filter">
          {
            filters.map((filterOption) =>
              <FilterButton key={filterOption}
                title={filterOption}
                onClick={() => toggleFilter(filterOption)}
                isActive={filterOption === filter}
              />
            )
          }
        </div>
      </div>

      <div className="grid">
        {
          filteredCards.map((card, index) =>

          (
            <Card key={card.name} name={card.name} description={card.description} logo={card.logo} isActive={card.isActive} onToggle={() => toggleCard(card.name)} onRemove={() => removeCard(card.name)}/>

          )


          )
        }
      </div>
    </div>

  )

}


export default CardGrid
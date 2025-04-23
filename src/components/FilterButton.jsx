import "./FilterButton.css"
const FilterButton = ({ title, onClick, isActive }) => {
    return (

        <button className={`filter_button ${isActive ? "active" : ""}`} onClick={onClick}>
            {title}
            
            </button>

    )
}

export default FilterButton
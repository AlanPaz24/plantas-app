import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='greetingContainer'>
            <h1 className='titulo'>{greeting}</h1>
        </div>
    )
    

}
export default ItemListContainer
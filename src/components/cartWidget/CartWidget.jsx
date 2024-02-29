import './cartWidget.css'

const CartWidget = () => {
    return (
        <div className='container'>
            <img className='cart' src="./images/carrito.png" alt="carrito" />
            <span className='badge text-bg-secondary'>5</span>
        </div>
    )
}

export default CartWidget
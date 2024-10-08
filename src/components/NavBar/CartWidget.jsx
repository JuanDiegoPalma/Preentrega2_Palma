import iconCart from "../../assets/cart.png"

const CartWidget = () => {
return (
    <div>
    <img className="carrito" src={iconCart} width={35} alt="" />
    <p className="numcart">1</p>
    </div>
)
}
export default CartWidget
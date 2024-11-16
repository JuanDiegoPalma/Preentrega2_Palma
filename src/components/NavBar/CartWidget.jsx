import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import iconCart from "../../assets/cart.png"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } =useContext(CartContext)

    const quantity = totalQuantity()

return (
    <Link to="/cart">
    <img className={ quantity === 0 ? "empty-cart" : "icon-cart" } src={iconCart} alt="" />
    <p className="numcart">{ quantity >= 1 && quantity}</p>
    </Link>
)
}
export default CartWidget
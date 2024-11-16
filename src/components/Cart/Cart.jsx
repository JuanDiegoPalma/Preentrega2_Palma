import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const { cart, totalPrice, deleteProductByID, deleteCart } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div>
                <h2 className="carrito-vacio">Todavia no hay productos en el carrito 🙃 </h2>
                <Link to= "/" className="volver-inicio-carrito">Volver al inicio</Link>
            </div>
        )
    }

return (
    <div className="cart">
        <h2 className="title-cart">Productos en el carrito</h2>
        {
            cart.map((productCart)=> (
                <div className="item-cart" key={productCart.id}>
                    <img src={productCart.image} className="img-item-cart" width={200} alt="" />
                    <p className="text-item-cart">{productCart.name}</p>
                    <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                    <p className="text-item-cart">Precio por unidad: $ {productCart.price}</p>
                    <p className="text-item-cart">Precio parcial: $ { productCart.quantity * productCart.price }</p>

                    <button className="delete-item-cart" onClick={ () => deleteProductByID(productCart.id) }>Eliminar producto</button>
                </div>
            ))
        }
        
        <div className="info-cart">
        <p className="text-info-cart"> Precio total: $ {totalPrice()}</p>
        <button  className="button-delete-cart" onClick={deleteCart}>Borrar carrito</button>
        <Link to="/checkout" className="finish-buy">Terminar mi compra</Link>
        </div>
    </div>
)
}

export default Cart

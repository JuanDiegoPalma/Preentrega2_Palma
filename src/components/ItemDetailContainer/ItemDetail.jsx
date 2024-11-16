import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState} from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemDetailContainer.css"

const ItemDetail = ( {product} ) => {

    const [ showItemCount, setShowItemCount ] = useState(true)
    const { addProuctInCart } = useContext(CartContext)

    const addProduct =(count) => {
        const productCart = { ...product, quantity: count }

        addProuctInCart(productCart)
        setShowItemCount(false)
    }


return (
    <div className="vistaCarrito">
        <div style={{display : "flex", paddingTop : "50px"}}>
        <img src={product.image} width={500} alt="" />
        <div>
            <h2>{product.name}</h2>
            <p className="descriptionCart">{product.description}</p>
            <h3>Precio: ${product.price}</h3>
            {
                showItemCount === true ? (
                    <ItemCount stock={product.stock} addProduct={addProduct} />
                ) : (
                    <Link className="terminarCompra" to= "/cart">Terminar la compra </Link>
                )
            }
        </div>
    </div>
    </div>
)
}

export default ItemDetail

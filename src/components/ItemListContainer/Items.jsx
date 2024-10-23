import { Link } from "react-router-dom"

const Items = ({product}) => {


    return (
        <div>
            <div className="cards">
                    <img src= {product.image} width={300} alt="" />
                    <h2>{product.name}</h2>
                    <p>Precio: $ {product.price}</p>
                    <Link to={"/detail/" + product.id}>
                    <button>Details</button>
                    </Link>
            </div>
        </div>
    )
    }
    
    export default Items
    
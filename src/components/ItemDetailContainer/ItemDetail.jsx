

const ItemDetail = ( {product} ) => {
return (
    <div>
        <div style={{display : "flex", paddingTop : "50px"}}>
        <img src={product.image} width={500} alt="" />
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    </div>
    </div>
)
}

export default ItemDetail

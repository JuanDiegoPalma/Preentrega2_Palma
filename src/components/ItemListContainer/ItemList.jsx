import Items from "./Items"

const ItemList = ( {products} ) => {

    return (
        <div className="item-list-container">
            {
                products.map( (product) => (
                    <Items product = {product} key={product.id}/>
                ))
            }
        </div>
    )
}

export default ItemList

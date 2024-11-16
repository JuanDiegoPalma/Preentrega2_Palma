import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([])

const addProuctInCart = (newProduct) =>{

const condition = isInCart(newProduct.id)
if(condition){
    const tempCart = [...cart]
    const findIndex = tempCart.findIndex( (productCart) => productCart.id === newProduct.id )
    tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity
    
    setCart(tempCart)
}else{
    setCart([ ...cart, newProduct ] )
}
}

const isInCart =(idProduct) => {
    return cart.some( ( productCart ) => productCart.id === idProduct)
}

const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
    return quantity
}

const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + ( productCart.quantity * productCart.price), 0)
    return price
}

const deleteProductByID = (idProduct) => {
    const filterProduct = cart.filter( (productCart) => productCart.id !== idProduct )
    setCart(filterProduct)
}

const deleteCart = () => {
    setCart([])
}

    return(
        <CartContext.Provider value={ { cart, addProuctInCart, totalQuantity, totalPrice, deleteProductByID, deleteCart} }>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
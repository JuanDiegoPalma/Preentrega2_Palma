import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import "./checkout.css"

const Checkout = () => {    
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });

    const [idOrder,setIdOrder] = useState(null)
    const { cart, totalPrice,deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    }

    const handleSubmitForm = (event)=> {
        event.preventDefault()
        
        const order = {
        buyer: {...dataForm},
        products: [...cart],
        date: Timestamp.fromDate( new Date() ),
        total: totalPrice()
        }

        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then( (response)=> setIdOrder(response.id))
            .catch(()=>console.log(error))
            .finally(()=> {
                deleteCart()
            })
    }

return (
    <div>
        {
            idOrder === null ? (
            <FormCheckout 
            dataForm={dataForm} 
            handleChangeInput={handleChangeInput} 
            handleSubmitForm={handleSubmitForm} />
            ) : (
                <div>
                    <h2 className="checkout-title">Gracias por tu compra, orden procesada 🤘</h2>
                    <p className="n-order" >Este es tu número de seguimiento: {idOrder}</p>
                    <Link className="home-button" to="/">Volver al inicio</Link>
                </div>
            )
        }
            
    </div>
    )
}

export default Checkout

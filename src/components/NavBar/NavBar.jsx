import CartWidget from "./cartWidget"
import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="containernavbar">
                <h1>Ramp & Roll</h1>
            </div>
            <ul className="list">
                <li>Productos</li>
                <li>Bmx</li>
                <li>Skate</li>
                <li>Nosotros</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar
import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <Link to = "/"className="containernavbar">
                <h1>Ramp & Roll</h1>
            </Link>
            <ul className="list">
                <li className="category">
                    <Link to= "/category/Bmx-Completas">Bmx Completas</Link> 
                </li>
                <li className="category">
                <Link to= "/category/Bmx-Parts">Bmx Parts</Link>
                </li>
                <li className="category">
                <Link to= "/category/Skate">Skate</Link>
                </li>
                <li className="category">
                <Link to= "/category/Indumentaria">Indumentaria</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar
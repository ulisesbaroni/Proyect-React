import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)

    return (
        <>
            <ul className='navbar-nav me-auto'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                    <button className="btn btn-dark disabled btn-carrito" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-cart-shopping"></i><span> { getItemQuantity() >= 1 && <span>{getItemQuantity()}</span>}</span></button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;

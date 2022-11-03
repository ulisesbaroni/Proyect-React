import { Link } from "react-router-dom";

const CartWidget = () => {

    return (
        <>
            <ul className='navbar-nav me-auto'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                    <button className="btn btn-dark disabled btn-carrito"><i class="fa-solid fa-cart-shopping"></i></button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;

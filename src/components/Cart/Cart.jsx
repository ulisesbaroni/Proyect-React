import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {

    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)
    return (
        <>
            {cart.length === 0 ? 
            <div className="emptytCart">
                <p className="display-6"><em>No hay productos en tu carrito</em></p>
                <p className="subtitle">Todos nuestros productos son totalmente  únicos, descubrilos y elegí los que mas te gusten!</p>
                <Link to={'/'}><button className="btn btn-outline-primary btn-descubrir">Descrubrir productos</button></Link>
            </div> 
            : 
            <div className="render-cart shadow p-3 mb-5 bg-body rounded" >
              <div className="items-cart" >
                {cart.map((prod,indice) =>
                <div className="card mb-3" key={indice} style={{maxWidth: '538px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                        <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 card-cart">
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: ${prod.precio}</p>
                            <p className="card-text">Subtotal: ${prod.precio * prod.cant}</p>
                        </div>
                        <button className="btn btn-secundary" onClick={() => removeItem(prod.id)}><img className="" src="https://firebasestorage.googleapis.com/v0/b/react-js-33f86.appspot.com/o/eliminar.png?alt=media&token=220fa5a8-cbbf-43a8-9c90-f3d9eeff597a" alt="icono de eliminar producto" /></button>
                    </div>
                  </div>
                </div>

                )}

                <div>
                   <p>Total: ${totalPrice()}</p>
                   <button className="btn btn-danger btn-vaciar" onClick={emptyCart}><img className="img-vaciar" src="https://firebasestorage.googleapis.com/v0/b/react-js-33f86.appspot.com/o/vaciar.png?alt=media&token=7601398a-6da0-4589-b131-fb93d9f4782d" alt="icono de eliminar carrito" />Vaciar Carrito</button>
                   <button className="btn btn-dark btn-finish"><Link to="/Checkout" className="nav-link">Ir a finalizar compra</Link></button>
                </div>
              </div>
            </div>
            }
        </>
    );
}

export default Cart;

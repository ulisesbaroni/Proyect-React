import {useContext} from 'react';
import { Link } from 'react-router-dom';
import Counter from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (counter) => {
        console.log(producto)
        console.log(counter)

        addItem(producto, counter)
    }

    return (
        <div className='row g-0 card-detail'>
            <div className="col-md-4">
                <img src={producto.img} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8" style={{maxWidth: '540px'}}>
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Dimensiones: {producto.dimensiones}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    <Counter stock = {producto.stock} onAdd={onAdd}/>
                </div>
                <button className="btn btn-outline-primary btn-continuar"><Link to="/" className="nav-link">Seguir comprando</Link></button>
                <button className="btn btn-outline-info btn-continuar"><Link to="/cart" className="nav-link">Ir al carrito</Link></button>
            </div>
        </div>
    );
}

export default ItemDetail
;


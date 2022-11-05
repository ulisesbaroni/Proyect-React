import React from 'react';
import Counter from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {

    return (
        <div className='row g-0 card-detail'>
            <div className="col-md-4">
                <img src={`../img/${producto.img}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8" style={{maxWidth: '540px'}}>
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Dimensiones: {producto.dimensiones}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    <Counter/>
                    <button className="btn btn-dark btn-agregarCarrito">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail
;


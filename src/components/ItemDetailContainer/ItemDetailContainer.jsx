import "./ItemDetailContainer.css";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { consultarBDD } from '../../assets/funciones';
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        consultarBDD('../json/productos.json').then(productos => {
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(prod)
        })
    }, []);

    return (
        <div>
            <div className="card mb-3 container shadow p-3 mb-5 bg-body rounded detalleProducto">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
